# echo-server


This is a simple Echo Server using Express as Backend and React, AXIOS, HTML, CSS, Webpack, Babel

This is intended to be run in a server. The Express server is in echoServer.js and run via nodemon / babel-node in the package.json (build-run) target.

1) The server accepts no value to be echoed and will return "No Message Received", otherwise a JavaScript alert will appear with the value provided, echoed back.

2) The Echo Server listens on port 8080, localhost, hard-coded in echoServer.js at the moment.
