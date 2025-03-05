import { createServer } from 'http';
const PORT = process.env.PORT;

const user =[
    {id:1,name:"Ariyan"},
    {id:2,name:"Rahul"},
    {id:3,name:"Rohit"},
    {id:4,name:"Rahul"},
    {id:5,name:"Rohit"},
];

const server = createServer((req, res) => {

    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
        res.end();
    }

    else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id=req.url.split('/')[5];
        res.setHeader('Content-Type', 'application/json');
        const user = user.find((user) => user.id === parseInt(id));
        if(user){
            res.write(JSON.stringify(user));
        }
        else{
            res.statusCode = 404;
            res.write(JSON.stringify({message:"User not found"}));
        }
        res.end();
    }

    else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message:"Route not found"}));
        res.end();
    }
    
});

server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});