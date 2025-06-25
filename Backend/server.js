const http = require('http');
const app = require("./app");
const port = process.env.PORT || 1003;

const server = http.createServer(app);

server.listen(port, ()=>{console.log(`server started at ${port}`)});