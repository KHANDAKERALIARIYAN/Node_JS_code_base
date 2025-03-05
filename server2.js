import { createServer } from 'http';
const PORT = process.env.PORT;

const user =[
    {id:1,name:"Ariyan"},
    {id:2,name:"Rahul"},
    {id:3,name:"Rohit"},
    {id:4,name:"Rahul"},
    {id:5,name:"Rohit"},
];

// const server = createServer((req, res) => {
    
//     if(req.url === '/api/users' && req.method === 'GET'){
//         res.setHeader('Content-Type', 'application/json');
//         res.write(JSON.stringify(user));
//         res.end();
//     }

//     else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
//         const id=req.url.split('/')[5];
//         res.setHeader('Content-Type', 'application/json');
//         const user = user.find((user) => user.id === parseInt(id));
//         if(user){
//             res.write(JSON.stringify(user));
//         }
//         else{
//             res.statusCode = 404;
//             res.write(JSON.stringify({message:"User not found"}));
//         }
//         res.end();
//     }

//     else{
//         res.setHeader('Content-Type', 'application/json');
//         res.statusCode = 404;
//         res.write(JSON.stringify({message:"Route not found"}));
//         res.end();
//     }

// }); // with out middle ware

// logger moddleware
const logger =(req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUdersHandler = (req, res) => {
    res.write(JSON.stringify(user));
    res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id=req.url.split('/')[5];
    res.setHeader('Content-Type', 'application/json');
    if(user){
        res.write(JSON.stringify(user));
    }
    else{
        res.statusCode = 404;
        res.write(JSON.stringify({message:"User not found"}));
    }
    res.end();
};

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        user.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message:"Route not found"}));
    res.end(); 
}

const server = createServer((req, res) => {

    logger(req, res,() => {
        jsonMiddleware(req, res, () => {

            if(req.url === '/api/users' && req.method === 'GET'){
                getUdersHandler(req, res);
            }

            else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req, res);
            }

            else if(req.url === '/api/users' && req.method === 'POST'){
                createUserHandler(req, res);
            }

            else{
                notFoundHandler(req, res);
            }
        })
    });
});

server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});