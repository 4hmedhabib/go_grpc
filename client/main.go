package client

import (
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
)

const (
	port = ":8080"
)

func main() {
	conn, err := grpc.Dial("localhost"+port, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("Did not connect: %v", err)
	}

	defer conn.Close()

	//client := pb.NewGreetServiceClient(conn)
	//
	//names := &pb.NameList{
	//	Names: []string{"Ahmed", "Habib", "Hassan"},
	//}
	//
	//callSayHello(client)
}
