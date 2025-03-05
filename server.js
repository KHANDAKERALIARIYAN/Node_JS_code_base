import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// GET current path
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

console.log(__filename,__dirname);

const server = http.createServer(async(req, res) => {
    // res.write('hello world');
    // res.end();

    // res.end('hello world');

    // res.setHeader('Content-Type', 'text/plain');
    // res.write('<h1>hello world</h1>');
    // res.end();

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('<h1>hello world</h1>');
    // res.end();

    // console.log(req.url);
    // console.log(req.method);
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1>hello world</h1>');

    // try{
    //     // check if GET request
    //     if(req.method === 'GET'){
    //         if(req.url === '/'){
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end('<h1>hello world</h1>');
    //         }else if(req.url === '/about'){
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end('<h1>about page</h1>');
    //         }else{
    //             res.writeHead(404, {'Content-Type': 'text/html'});
    //             res.end('<h1>page not found</h1>');
    //         }
    //     }else{
    //         throw new Error('Method not supported');
    //     }
    // }catch(error){
    //     res.writeHead(500, {'Content-Type': 'text/plain'});
    //     res.end('Server Error');
    // }

    try{
        // check if GET request
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                filePath = path.join(__dirname,'public', 'index.html');
            }else if(req.url === '/about'){
                filePath = path.join(__dirname,'public', 'about.html');
            }else{
                throw new Error('Page not found');
            }
        }else{
            throw new Error('Method not supported');
        }

        const data = await fs.readFile(filePath, 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    }catch(error){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
    }

    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});