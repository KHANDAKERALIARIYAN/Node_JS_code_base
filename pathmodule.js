import path from 'path';
import url from 'url';

const filePath ='./dir1/dir2/text.txt';

// basename()
console.log(path.basename(filePath)); // will give us the file name 

// dirname()
console.log(path.dirname(filePath)); // will give us the directory name

// extname()
console.log(path.extname(filePath)); // will give us the file extension

// parse()
console.log(path.parse(filePath)); // will give us the parsed path

const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename,__dirname);

// join()
const filePath2=path.join(__dirname,'dir1','dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3=path.resolve(__dirname,'dir1','dir2', 'test.txt');
console.log(filePath3);