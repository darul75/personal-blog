package main

import (
	"fmt"
	"net"
)

func main() {

	//addr := net.TCPAddr{IP: net.ParseIP("127.0.0.1"), Port: 3000}

	// func Dial(network, address string) (Conn, error)

	//conn, _ := net.ListenIP("ip", addr)
	conn, _ := net.Dial("tcp", "127.0.0.1:8081")

	fmt.Println(conn)

}
