const http = require('http');

http.createServer(function(request, response){
        response.writeHead(200, {"content-type": "text/html"});
        response.write("<!DOCTYPE html >");
        response.write("<html>");
        response.write("<head>");
        response.write("<title> first server </title>");
        response.write("</head>");
        response.write("<body>");
        response.write("Hello VERO!!!");
        response.write("</body>");
        response.write("</html>");
});