package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
)

//http://stackoverflow.com/questions/21270945/how-to-read-the-response-from-a-newsinglehostreverseproxy

func NewHttpClient() *http.Client {
	return &http.Client{}
}

func handler(w http.ResponseWriter, r *http.Request) {
	client := NewHttpClient()
	//r.Host = "127.0.0.1:8081"
	// func NewRequest(method, urlStr string, body io.Reader) (*Request, error)
	fmt.Println("seeking")
	target := "http://127.0.0.1:8081" + r.URL.Path
	fmt.Println(target)
	r.Host = "http://127.0.0.1:8081"
	newReq, _ := http.NewRequest(r.Method, "http://127.0.0.1:8081"+r.URL.Path, r.Body)
	response, err := client.Do(newReq)
	if err != nil {
		// handle error
		fmt.Println(err)
	}
	fmt.Println(response)
	defer response.Body.Close()
	body, err := ioutil.ReadAll(response.Body)
	tmpl, err := template.New("name").Parse(string(body))

	fmt.Fprintf(w, "%s", tmpl)

	//fmt.Fprintf(w, "%s", body)
}

func main() {
	http.HandleFunc("/", handler)

	http.ListenAndServe(":8080", nil)
}
