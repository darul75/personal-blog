Few months ago, I coded on [hackerrank](https://www.hackerrank.com) by learning Go language. Tests there are sometimes very tricky but you should take a look at them and practice sometimes. Today, I will show your a more concrete example with a reverse proxy implementation.

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

```clike
func NewSingleHostReverseProxy(target *url.URL) *ReverseProxy
```

You provide a target URL and it returns a ReverseProxy instance which will do the work for you, OMG it is great.

Then a simple call to

```clike
func (p *ReverseProxy) ServeHTTP(rw http.ResponseWriter, req *http.Request)
```

Will forward the request, it sounds very good, let's try it.

## Scenario

You have a back end service somewhere with a webserver interface but you do not want to expose directly to the web or want to put some custom rules to access it, authentication, or some business logic.

In this example, we will demonstrate role of our reverse proxy by forwarding all web request from server one (running on arbitrary 80 port) to another server somewhere, let's say http://127.0.0.1:8080

Resume
- our program will start a webserver running on 80
- all request made to this server will be transparently forward to targeted webserver and response sent to first server.

### Code

When you start, do not worry about making things simple, with no struct, here I have just created a simple struct called Prox which is responsible to make business logic of reverse proxy.

Here are some examples of [struct](https://tour.golang.org/moretypes/4) usage and pointers method receivers with Go [receivers](https://tour.golang.org/methods/1)

```clike

// Our RerverseProxy object
type Prox struct {
	target *url.URL // target url
	proxy  *httputil.ReverseProxy // instance of Go ReverseProxy will do the job for us
}

// Small factory
func New(target string) *Prox {
  url, _ := url.Parse(target)
  // you must check error but I do not here
  return &Prox{proxy: httputil.NewSingleHostReverseProxy(url)}
}

func (p *Prox) handle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("X-GoProxy", "GoProxy")
  // call to magic method from ReverseProxy object
	p.proxy.ServeHTTP(w, r)
}
```

### Main

Go provides mecanism to create an executable at the end, to do so and to test here is how your main could look.

Flag Go package is very nice to put some command line options.

```clike
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

### Business logic

Our first example had no logic but you can easily add you own.

- add security tests
- check number of requests done..
- filter query path, what we will do here
- ...

```clike
type Prox struct {
  target        *url.URL
  proxy         *httputil.ReverseProxy
  routePatterns []*regexp.Regexp // add some route patterns with regexp
}

func New(target string) *Prox {
  url, _ := url.Parse(target)

  return &Prox{proxy: httputil.NewSingleHostReverseProxy(url)}
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
      return true
    }
  }
  fmt.Println("Not accepted routes %x", r.URL.Path)
  return false
}
```

## Conclusion

