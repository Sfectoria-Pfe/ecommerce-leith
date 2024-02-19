const http = require("http");
const port = 3100;
const host = "127.0.0.1";
let products = require("./data");
const { log } = require("console");
function handleRequest(request, response) {
  if (request.method === "GET" && request.url === "/pruducts") {
    response.writeHead(200, { "Content-Type": "application/json"  });
    response.end(JSON.stringify(products));
  } else if (request.method === "GET" && request.url === "/") {
    console.log(request, "this the request");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello test");
  } else if (request.method === "POST" && request.url === "/post") {
    response.writeHead(201, { "Content-Type": "application/json" });
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    response.end("end", () => {
      products.push(JSON.parse(body));
      response.end(JSON.stringify(products));
    });
  } else if (request.method === "DELETE" && request.url.includes("delete")) {
    const id = request.url.split("/")[2];

    let newproducts = products.filter((item) => item.id !== +id);
    console.log(newproducts);
    if (products.length === newproducts.length) {
      response.writeHead(400, { "Content-Type": "application/json" });

      response.end(JSON.stringify({ message: "id not found" }));
    } else {
      response.writeHead(202, { "Content-Type": "application/json" });

      products = newproducts;

      response.end(JSON.stringify(products));
    }
    
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    return response.end("404 Not Found!");
  }
}

const server = http.createServer(handleRequest);
console.log(`http://${host}:${port}`);

server.listen(port, host);
