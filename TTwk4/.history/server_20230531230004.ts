//ctrl+shift+b to compile and run the watch mode
//require built-in modules
import http from 'http';//ECMAScript Module pattern(ESM)
import fs from 'fs';
import mime from 'mime-types';

let lookup = mime.lookup;//alias for mime.lookup

const port = 3000;

//when we create a server instance, it's IMMUTABLE = cannot be changed
const server = http.createServer(function(req, res)
{
    let path = req.url as string;//alias fro req.url
    console.log(`Req url: ${req.url}`);
    if(path == "/" || path =="/home")
    {
        path = "/index.html";
    }

    let mime_type = lookup(path.substring(1)) as string;
    console.log(`MIME TYPE: ${mime_type}`);


    fs.readFile(__dirname + path, function(err, data)
    {        
        if(err)
        {
            res.writeHead(404);//status - file not found 
            console.log(`ERROR: ${err.message}`);//output to the dev console
            return res.end("ERROR 404");
            //return res.end(err.message);//output the error message to the page
        }
        res.setHeader("X-Content-Type-Options", "nosniff");//security guard
        res.writeHead(200, {'Content-Type': mime_type});//status - all ok
        //console.log(`DATA: ${data}`);
        return res.end(data);//output the file that was read to the page
    });
});

server.listen(port, function() //server.addEventListener("req")
{
    console.log(`Server running at Port: ${port}`);//template string
});
