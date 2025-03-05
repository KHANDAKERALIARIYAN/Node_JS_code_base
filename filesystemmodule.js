// readFile() - callback

// import fs from 'fs';
// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// readFileSync() - synchronous version

// import fs from 'fs/promises'
// const data =fs.readFileSync('text.txt', 'utf-8');
// console.log(data);

// readFile() - Promise .then()

// import fs from 'fs/promises'
// fs.readFile('text.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// readFile() - async await

// import fs from 'fs/promises';
// const readFile = async () => {
//     try{
//         const data = await fs.readFile('text.txt', 'utf-8');
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// };
// readFile(); 

// writeFile()

// import fs from 'fs/promises';
// const writeFile = async () => {
//     try{
//         await fs.writeFile('text.txt', 'Hello World i am learnig node');
//         console.log('File written successfully');
//     }catch(err){
//         console.log(err);
//     }
// };

// appendFile()

// const appendFile = async () => {
//     try{
//         await fs.appendFile('text.txt', '\nHello World i am learnig node');
//         console.log('File appended successfully');
//     }catch(err){
//         console.log(err);
//     }
// };

// writeFile();
// appendFile();
// readFile();