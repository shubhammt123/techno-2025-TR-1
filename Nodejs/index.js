// fs , os , path , http
// express

// const fs = require("fs");

// const os = require("os");

const http = require("http");

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

// fs.unlink("files/index.js",()=>{});
// fs.rmdir("files",(err)=>{
//     if(err){
//         console.log(err)
//     }
// });


// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());

let productData = [{
    productId : 1,
    name : "Iphone",
    category : "smartphone",
    price : 100000
},{
    productId : 2,
    name : "Samsung",
    category : "smartphone",
    price : 100000
}
]

const server = http.createServer((req,res)=>{
    if(req.url === "/"){ // http://localhost:3000
        res.end("Home route accessed");
    }else if(req.url = "/product"){ // http://localhost:3000/product
        res.end(JSON.stringify(productData));
    }
});


server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
})