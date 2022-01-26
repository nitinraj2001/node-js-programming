var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello world'+'Welcome to the world of programming');
}).listen(9000);