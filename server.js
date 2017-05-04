var http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html");
    response.write("<meta charset=\"UTF-8\">");    
	response.write("<h2>#100днейкода</h2>");
    response.end();
}).listen(1111);