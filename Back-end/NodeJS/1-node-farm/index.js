// CORE MODULES
const fs = require('fs');
const http = require('http');
const url = require('url');

// OWN MODULES
const replaceTemplate = require('./modules/replaceTemplate');



    const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
    const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
    const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url,true);

    //OVERVIEW
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200,{"Content_type": "text/html"});
        
        const cardsHTML = dataObj.map(el=>{
            return replaceTemplate(tempCard,el);
        }).join("");

        const output = tempOverview.replace("{%PRODUCT_CARDS%}",cardsHTML); 

        res.end(output);
    }
    //PRODUCT
    else if (pathname === "/product") {
        res.writeHead(200,{"Content_type": "text/html"});

        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct,product);

        res.end(output);
    }
    //API
    else if (pathname === "/api") {

        res.writeHead(200, { "Content_type": "application/json" });
        res.end(data);
    }
    //NOT FOUND
    else {
        res.writeHead(404);
        res.end(`<h1>Page not found</h1>`);
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});