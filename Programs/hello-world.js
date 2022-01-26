var http=require('http');
const { url } = require('inspector');
var dt=require('./myFirstModule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.write("Current data and time in system is: "+dt.currentDateAndTime());
    res.end('hello world '+'Welcome to the world of programming');
}).listen(9000);