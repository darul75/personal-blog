package main

import (
    "fmt"
    "net"
    "os"
)

// http://stackoverflow.com/questions/2270670/trouble-reading-from-a-socket-in-go

func handle(conn *net.TCPConn) {
    fmt.Printf("Connection from %s\n", conn.RemoteAddr());
    message := make([]byte, 1024);
    // TODO: loop the read, we can have >1024 bytes
    n1, error := conn.Read(message);
    if error != nil {
        fmt.Printf("Cannot read: %s\n", error);
        os.Exit(1);
    }

    fmt.Printf("Echoed %d bytes\n", message[0:n1]);
    n2, error := conn.Write(message[0:n1]);
    if error != nil || n2 != n1 {
        fmt.Printf("Cannot write: %s\n", error);
        os.Exit(1);
    }
    fmt.Printf("Echoed %d bytes\n", n2);

    conn.Close();   // TODO: wait to see if more data? It would be better with telnet...
}

func main() {
    /*protocol := "icmp"
    netaddr, _ := net.ResolveIPAddr("ip4", "127.0.0.1")
    conn, _ := net.ListenIP("ip4:"+protocol, netaddr)*/

	//conn, err:= net.Dial("tcp", "google.com:http")
	/*conn, err:= net.Dial("ip4:1", "127.0.0.1")

	checkConnection(conn, err)*/

	// func Dial(network, address string) (Conn, error)
	/*conn, err :=net.Dial("udp", "tst3.creditagricole.info:80")
	checkConnection(conn, err)

	buf := make([]byte, 1024)
    numRead, _:= conn.Read(buf)
    fmt.Fprintf(conn, "GET / HTTP/1.0\r\n\r\n")
    fmt.Printf("% X\n", buf[:numRead])*/

    // func ListenPacket(net, laddr string) (PacketConn, error)
    /*protocol := "ip"
    netaddr, _ := net.ResolveIPAddr("ip4", "127.0.0.1")
    conn, _ := net.ListenIP("ip4:"+protocol, netaddr)

    buf := make([]byte, 1024)
    numRead, _, _ := conn.ReadFrom(buf)
    fmt.Printf("% X\n", buf[:numRead])*/

   /* l, err := net.ListenPacket("udp", "127.0.0.1:0")
    	if err != nil {
    		fmt.Printf("Listen failed: %v", err)
    }

    fmt.Printf(l.LocalAddr().String())

    buf2 := make([]byte, 1024)
    for {
    	numRead2, _, _ := l.ReadFrom(buf2)
		fmt.Printf("% X\n", buf2[:numRead2])
    }*/


	/*conn, err =net.Dial("tcp", "[2620:0:2d0:200::10]:80")
	checkConnection(conn, err)*/

	listen := ":7";
    addr, error := net.ResolveTCPAddr("tcp", "127.0.0.1:8082");
    if error != nil {
        fmt.Printf("Cannot parse \"%s\": %s\n", listen, error);
        os.Exit(1);
    }
    listener, error := net.ListenTCP("tcp", addr);
    if error != nil {
        fmt.Printf("Cannot listen: %s\n", error);
        os.Exit(1);
    }
    for {   // ever...
        conn, error := listener.AcceptTCP();
        if error != nil {
            fmt.Printf("Cannot accept: %s\n", error);
            os.Exit(1);
        }
        go handle(conn);
    }

}

func checkConnection(conn net.Conn, err error) {
	if err!= nil {
		fmt.Printf("error %v connecting!", err)
		os.Exit(1)
	}

	fmt.Println("Connection is made with %v", conn)

}
