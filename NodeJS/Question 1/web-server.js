//1. Create a folder, say my-website. Initialize it as a Node.js project.  Create 2 pages
//* index.html that includes a few lines about yourself
//* contact.html that has your contact details like email id, phone number, and a contact form that takes in user's name, emailid, and message.   
//Have these pages served on port 3000 using an HTTP server.  
//* GET http://localhost:3000/ returns the index.html page
//* GET http://localhost:3000/contact returns the contact.html page
//* POST http://localhost:3000/message accepts the details from the contact form on submission and writes them to a messages.json file (design a schema to store the data)
//* Each page should have a menu on top to switch between index page and contact page.
//
//_Hints_:  
//* req.url has the URL from incoming request. Decide which file to serve based on it (req is the request object here).
//* req is a readable stream (so you can listen for data event on it). Concatenate the chunks received to form the request body. Then parse it to get message details.
//* Check the documentation to find out how to retrieve the incoming request's method (GET/POST etc.)

const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

function serveFile(filePath,req, res){
    fs.readFile(filePath,"utf8" , (err, contents)=>{
        if(err){
            res.statusCode= 500;
            return res.end(err.message);
        }
        else{
            res.setHeader('Content-Type' , 'text/html');
            res.statusCode= 200;
            res.end(contents);
        }
});
}


const server = http.createServer((req, res)=>{
    console.log(req.url);
    const parsedUrl = url.parse(req.url,true);
    console.log(__dirname);
    let filePath = "";
    switch(parsedUrl.pathname){
        case '/about' : filePath  = path.join(__dirname,'public','about.html');
                        serveFile(filePath,req,res);
                        break;
        case '/home' :  filePath  = path.join(__dirname,'public','home.html');
                        serveFile(filePath,req,res);
                        break;

        case '/contact' :  filePath  = path.join(__dirname,'public','contact.html');
                           serveFile(filePath,req,res);
                           break;
        case '/contactData' : console.log(req.body);
        default: res.end("Page Not Found");
    }

    
});

const PORT = 3000;  //above 1024 is ok. 80 is for web server for http request.


server.listen(PORT, (err)=>{
    if(err){
        console.log(`Error Connection to ${PORT}`);
    }
    else{
        console.log(`Listening on ${PORT}`);
    }
})
