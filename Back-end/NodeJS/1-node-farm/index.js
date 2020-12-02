const fs = require('fs');
const http = require('http');

let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
let dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
        res.end("This is an overview");
    }
    else if (pathName === "/product") {
        res.end("This is a product");
    }
    else if (pathName === "/api") {

        res.writeHead(200, { "Content_type": "application/json" });
        res.end(data);
    }
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});