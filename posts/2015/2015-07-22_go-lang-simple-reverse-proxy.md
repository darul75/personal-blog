Few months ago, I coded on [hackerrank](https://www.hackerrank.com) by learning Go language. Tests there can be very tricky but you should take a look at them and practice sometimes. Today, I will show your a more concrete example with a reverse proxy implementation.

Main role of this pattern is to filter network request by inspecting (modifying...) and route it (or not) somewhere else.

For that case, we will play with *http* protocol but Go packages provide everything you may need to play with network other layers, TCP, UDP, IP...

## Learn Go lang

Simply start with the tour of Go [here](http://tour.golang.org) and [examples](https://gobyexample.com/)

This language is very intuitive, not so far from C language with some object oriented pattern like interface.

## Packages

Go provides all the necessary [packages](http://golang.org/pkg/) to build you own application.

## Http

[net/http](https://golang.org/pkg/net/http/)'s package exposes what we do in most part of our daily life on the web: play with client, server, request, response..

If you deep look at Go documentation which is not really readable according to me, you should find this sub httputil package and NewSingleHostReverseProxy [function](https://golang.org/pkg/net/http/httputil/#ReverseProxy)

```go
func NewSingleHostReverseProxy(target *url.URL) *ReverseProxy
```

You provide a target URL and it returns a ReverseProxy instance which will do the work for you, OMG it is great.

Then a simple call to

```go
func (p *ReverseProxy) ServeHTTP(rw http.ResponseWriter, req *http.Request)
```

Will forward the request, it sounds very good, let's try it.

## Scenario

You have a backend service somewhere accessible with an http interface. And you do not want it to be exposed directly or you want to put some custom rules to access it, as authentication, or with some arbitrary logic. Thus why not place a reverse proxy in front of your backend services.

In this example, we will demonstrate role of our reverse proxy by forwarding all web request from server one (running on arbitrary 80 port) to another server somewhere, let's say http://127.0.0.1:8080

Resume
- our program will start a webserver running on 80
- all request made to this server will be transparently forward to targeted webserver and response sent to first server.

## Forward trafic

When you start, do not worry about making things simple, with no struct, here I have just created a simple struct called Prox which is responsible to make business logic of reverse proxy.

Here are some examples of [struct](https://tour.golang.org/moretypes/4) usage and pointers method receivers with Go [receivers](https://tour.golang.org/methods/1)

### Simple proxy

```go

// our RerverseProxy object
type Prox struct {
  // target url of reverse proxy
	target *url.URL
  // instance of Go ReverseProxy thatwill do the job for us
	proxy  *httputil.ReverseProxy
}

// small factory
func New(target string) *Prox {
  url, _ := url.Parse(target)
  // you should handle error on parsing
  return &Prox{target: url,proxy: httputil.NewSingleHostReverseProxy(url)}
}

func (p *Prox) handle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("X-GoProxy", "GoProxy")
  // call to magic method from ReverseProxy object
	p.proxy.ServeHTTP(w, r)
}
```

### Main example

Flag Go Flag package is very nice to put some command line options.

```go
func main() {
  // come constants and usage helper
  const (
    defaultPort = ":80"
    defaultPortUsage = "default server port, ':80', ':8080'..."
    defaultTarget = "http://127.0.0.1:8080"
    defaultTargetUsage = "default redirect url, 'http://127.0.0.1:8080'"
  )

  // flags
  port := flag.String("port", defaultPort, defaultPortUsage)
  url := flag.String("url", defaultTarget, defaultTargetUsage)

  flag.Parse()

  fmt.Println("server will run on : %s", *port)
  fmt.Println("redirecting to :%s", *url)

  // proxy
  proxy := &Prox{}
  proxy.New(*url)

  // server
  http.HandleFunc("/", proxy.handle)
  http.ListenAndServe(*port, nil)
}
```

Go tools can compile your code to get a binary executable program.

```go
go run build yourfile.go
```

## Forward trafic with logic inside

Our first example had no logic but you can easily add you own.

- add security tests
- check number of requests done..
- filter query path, what we will do here.
- ...

Let's register one regular expression which applied to all requests path allows or disallows forwarding to our target url.

### Advanced proxy

```go
type Prox struct {
  target        *url.URL
  proxy         *httputil.ReverseProxy
  routePatterns []*regexp.Regexp // add some route patterns with regexp
}

func New(target string) *Prox {
  url, _ := url.Parse(target)

  return &Prox{target: url,proxy: httputil.NewSingleHostReverseProxy(url)}
}

func (p *Prox) handle(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("X-GoProxy", "GoProxy")

  if p.routePatterns == nil || p.parseWhiteList(r) {
    p.proxy.ServeHTTP(w, r)
  }
}

func (p *Prox) parseWhiteList(r *http.Request) bool {
  for _, regexp := range p.routePatterns {
    fmt.Println(r.URL.Path)
    if regexp.MatchString(r.URL.Path) {
      // let's forward it
      return true
    }
  }
  fmt.Println("Not accepted routes %x", r.URL.Path)
  return false
}
```

### Full main

```go
func main() {
  const (
    defaultPort             = ":80"
    defaultPortUsage        = "default server port, ':80', ':8080'..."
    defaultTarget           = "http://127.0.0.1:8080"
    defaultTargetUsage      = "default redirect url, 'http://127.0.0.1:8080'"
    defaultWhiteRoutes      = `^\/$|[\w|/]*.js|/path|/path2`
    defaultWhiteRoutesUsage = "list of white route as regexp, '/path1*,/path2*...."
  )

  // flags
  port := flag.String("port", defaultPort, defaultPortUsage)
  url := flag.String("url", defaultTarget, defaultTargetUsage)
  routesRegexp := flag.String("routes", defaultWhiteRoutes, defaultWhiteRoutesUsage)

  flag.Parse()

  fmt.Println("server will run on : %s", *port)
  fmt.Println("redirecting to :%s", *url)
  fmt.Println("accepted routes :%s", *routesRegexp)

  //
  reg, _ := regexp.Compile(*routesRegexp)
  routes := []*regexp.Regexp{reg}

  // proxy
  proxy := New(*url)
  proxy.routePatterns = routes

  // server
  http.HandleFunc("/", proxy.handle)
  http.ListenAndServe(*port, nil)
}
```

## Note

By looking into [go server](http://golang.org/src/net/http/server.go) code, you can see that a go [routine](https://golang.org/doc/effective_go.html#goroutines) "A goroutine is a lightweight thread of execution." is started on every request.

```go
func (h *timeoutHandler) ServeHTTP(w ResponseWriter, r *Request) {
  done := make(chan bool, 1)
  tw := &timeoutWriter{w: w}
  go func() {
    h.handler.ServeHTTP(tw, r)
    done <- true
  }()
}
```

## Conclusion

It was just a POC but you can easily change it [here](https://github.com/darul75/personal-blog/blob/master/examples/2015/2015-07-22_go-lang-simple-reverse-proxy/go-reverse.go) to start.

![Just for fun](/images/posts/stairs-man-person-walking.jpg)
