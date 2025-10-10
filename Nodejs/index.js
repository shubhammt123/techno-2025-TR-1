// fs , os , path , http
// express

const fs = require("fs");

// fs.mkdirSync("files");

// fs.mkdir("images",(err)=>{
//     if(err){
//         console.log(err)
//     }
// });

// console.log("Hello world");

// fs.writeFileSync("test.txt","jhfgfdfghdfturytdhfghjsdgfhjrtj");

// fs.writeFile("test.txt","This is full stack with mobile app training",()=>{});

// console.log("Hello world");


// fs.writeFile("page/index.js","console.log('Hello From files folder')",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// let data = fs.readFileSync("test.txt","utf-8");
// console.log(data)

// fs.readFile("test.txt","utf-8",(err ,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.appendFile("test.txt","\nHello , My name is shubham\n",(err)=>{
//     if(err){
//         console.log(err)
//     }
// });

// fs.unlink("test.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
// });

fs.unlink("files/index.js",()=>{});
fs.rmdir("files",(err)=>{
    if(err){
        console.log(err)
    }
});