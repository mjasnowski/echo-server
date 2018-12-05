import express from 'express';

const server = express();

let port = 8080;
let host = "localhost";

server.use(express.static('.'));

// Basic Response with a message
server.get(['/echo','/echo/:message'], (req,res) => {
    let messageReceived = req.params.message || "No Message Received";
    console.info("Message Received: " + messageReceived);
    res.send({
        message: messageReceived
    })
});

server.listen(port,host, () => {
    console.info("Echo Server listening on port ", host, port);
});