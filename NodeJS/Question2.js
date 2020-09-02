//2. Create a simple HTTP server that runs on port 3000, does simple arithmetic operations, and responds with the result.  
//Some examples...   
//* http://localhost:3000/add?x=12&y=13 returns the string 25
//* http://localhost:3000/multiply?x=12&y=13 returns the string 156
//Your server must support add, subtract, multiply and divide operations. For an unsupported operation/arguments it must return a sensible error message, with appropriate error code (HTTP status code 401 is for a badly constructed request)

const http = require("http");
const url = require("url");


const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl.pathname);
    const x = parseInt(parsedUrl.query.x);
    const y= parseInt(parsedUrl.query.y);
    if(parsedUrl.pathname === "/add"){
        res.write(`Sum =  ${x+y}\n`);
    }
    else if(parsedUrl.pathname === "/subtract"){
        res.write(`Difference =  ${x-y}\n`);
    }    
    else if(parsedUrl.pathname === "/multiply"){
        res.write(`Multiplication =  ${x*y}\n`);
    }
    else if(parsedUrl.pathname === "/divide"){
        res.write(`Division=  ${x/y}\n`);
    }
    else{
        res.statusCode = 401;
        res.write(`Unsupported Command: HTTP ERROR: ${res.statusCode}\n`);
    }
    res.end("Bye, Bye!\n");
    
});

const PORT = 3000;  

server.listen(PORT, (err)=>{
    if(err){
        console.log(`Error Connection to ${PORT}`);
    }
    else{
        console.log(`Listening on ${PORT}`);
    }
})