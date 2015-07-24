Few months ago, I coded on [hackerrank](https://www.hackerrank.com) by learning Go language. Today, I will show your a more concrete example with a reverse proxy implementation.

Main role of this pattern is to filter network request by inspecting (modifying...) and route it (or not) somewhere else.

For that case, we will play with *http* protocol but Go packages provide everything you may need to play with network other layers, TCP, UDP, IP...

## Learn Go lang

Simply start with the tour of Go [here](http://tour.golang.org) and [examples](https://gobyexample.com/)

This language is very intuitive, not so far from C language with some object oriented pattern like interface.

## Packages

Go provides all the necessary [packages](http://golang.org/pkg/) to build you own application.

## Http

[net/http](https://golang.org/pkg/net/http/)'s package exposes what we do in most part of our daily life on the web: play with client, server, request, response..

If you deep look at Go documentation which is not really readable according to me, you will meet this sub httputil package and NewSingleHostReverseProxy [function](https://golang.org/pkg/net/http/httputil/#ReverseProxy)

```clike
func NewSingleHostReverseProxy(target *url.URL) *ReverseProxy
```

You provide a target URL and it returns a ReverseProxy instance which will do the work for you, OMG it is great.

Then a simple call to

```clike
func (p *ReverseProxy) ServeHTTP(rw http.ResponseWriter, req *http.Request)
```

Will forward the request, it sounds very good, let's try it.

## Code

When you start, do not worry about making things simple, with no struct, here I have just created a simple struct called Prox which is responsible to make business logic of reverse proxy.

Here are some examples of [struct](https://tour.golang.org/moretypes/4) usage and pointers method receivers with Go [receivers](https://tour.golang.org/methods/1)

```clike
package main

import (
	"flag"
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
)

// will be our RerverseProxy object
type Prox struct {
	target *url.URL
	proxy  *httputil.ReverseProxy
}

// will create a new
func (p *Prox) New(target string) {
	url, _ := url.Parse(target)
	p.proxy = httputil.NewSingleHostReverseProxy(url)
}

func (p *Prox) handle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("X-GoProxy", "GoProxy")
	p.proxy.ServeHTTP(w, r)
}

func main() {
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

