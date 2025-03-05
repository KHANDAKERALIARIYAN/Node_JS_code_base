// console.log("hello world");
// console.log(global);//global object
// console.log(process);

// 1
// const generateRandomNumber=require("./utils");
// console.log(`Random Number : ${generateRandomNumber()}`);

// 2
// const {generateRandomNumber,celciusToFahrenheit}=require("./utils");
// console.log(`Random Number : ${generateRandomNumber()}`);
// console.log(`celcius to fahrenheit : ${celciusToFahrenheit(0)}`);

// 3 - post controller,js
// import {getPosts} from "./postController.js";
// console.log(getPosts());

// 4 
// import getPosts from "./postController.js";
// console.log(getPosts());

// 5
import getPosts,{getPostsLength} from "./postController.js";
console.log(getPosts());
console.log(`Post Length : ${getPostsLength()}`);