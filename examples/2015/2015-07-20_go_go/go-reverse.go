package main

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
)

type Prox struct {
	target *url.URL
	proxy  *httputil.ReverseProxy
}

func (p *Prox) New(target string) {
	url, _ := url.Parse(target)
	p.proxy = httputil.NewSingleHostReverseProxy(url)
}

func (p *Prox) handle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("X-GoProxy", "GoProxy")
	fmt.Println(r.Header)
	p.proxy.ServeHTTP(w, r)
}

func main() {
	proxy := &Prox{}
	proxy.New("http://127.0.0.1:8081")

	http.HandleFunc("/", proxy.handle)

	http.ListenAndServe(":8080", nil)
}
