const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = (temp, product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%QUANTITY%}/g,product.quantity);
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);
    output = output.replace(/{%FROM%}/g,product.from);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/,"not-organic");

    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;

    //OVERVIEW
    if (pathName === "/" || pathName === "/overview") {
        const cardsHTML = dataObj.map(el=>{
            return replaceTemplate(tempCard,el);
        }).join("");

        const outputHTML = tempOverview.replace("{%PRODUCT_CARDS%}",cardsHTML); 

        res.end(outputHTML);
    }
    //PRODUCT
    else if (pathName === "/product") {
        res.end("This is a product");
    }
    //API
    else if (pathName === "/api") {

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