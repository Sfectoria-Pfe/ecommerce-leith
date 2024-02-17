const http=require('http')
const port=3100
const host="127.0.0.1"

function handleRequest(request,response){
    if(request.method === "GET" && request.url === "/"){
        response.writeHead(200,{'Content-type':'text/plain'})
        return response.end("ty emchiii 3aaad")


    }else if(request.method == "GET" && request.url === "/test"){
        response.writeHead(300,{'Content-type':'text/plain'})
        return response.end("hello test")
    }

    else {
        response.writeHead(404,{'Content-type':'text/plain'})
        return response.end("404 NOT FOUND")


    }

   

}

const server=http.createServer(handleRequest)
console.log(`http://${host}:${port}`);


server.listen(port,host)