package main

import (
	"bufio"
	"fmt"
	"io"
	"net"
	"os"
)

// http://stackoverflow.com/questions/2270670/trouble-reading-from-a-socket-in-go

func handle(conn *net.TCPConn) {
	fmt.Printf("Connection from %s\n", conn.RemoteAddr())
	// TODO: loop the read, we can have >1024 bytes
	// n1, error := conn.Read(message);

	buf := bufio.NewReader(conn)

	for {
		message := make([]byte, 1024)
		n1, err := buf.Read(message)
		//n2, error := conn.Write(message[0:n1])
		fmt.Printf("Echoed %s string\n", message[0:n1])
		// fmt.Printf("Echoed %d bytes\n", message[0:n1])
		// if error != nil || n2 != n1 {
		// 	fmt.Printf("Cannot write: %s\n", error)
		// 	os.Exit(1)
		// }

		if err == io.EOF {
			break
		}
	}

	conn.Close()
}

func main() {
	listen := ":7"
	addr, error := net.ResolveTCPAddr("tcp", "0.0.0.0:8081")
	if error != nil {
		fmt.Printf("Cannot parse \"%s\": %s\n", listen, error)
		os.Exit(1)
	}
	listener, error := net.ListenTCP("tcp", addr)
	if error != nil {
		fmt.Printf("Cannot listen: %s\n", error)
		os.Exit(1)
	}
	for { // ever...
		conn, error := listener.AcceptTCP()
		if error != nil {
			fmt.Printf("Cannot accept: %s\n", error)
			os.Exit(1)
		}
		go handle(conn)
	}

}

func checkConnection(conn net.Conn, err error) {
	if err != nil {
		fmt.Printf("error %v connecting!", err)
		os.Exit(1)
	}

	fmt.Println("Connection is made with %v", conn)

}
