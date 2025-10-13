const express = require("express");
const fs = require("fs");
const app = express();

// create - POST
// read - GET
// update - PUT
// delete - DELETE

app.use(express.json());

// product CRUD
// list of all product - search  - GET
// information of a particular product - GET
// create product - POST
// update product - PUT
// delete product - DELETE

app.get("/getAllProduct",(req,res)=>{
    let productData = fs.readFileSync("product.json","utf-8");
    res.send(productData);
});
app.get("/getProductById",()=>{});
app.post("/createProduct",(req,res)=>{
    const reqBody = req.body;
    const productData = fs.readFileSync("product.json");
    const parsedData = JSON.parse(productData);
    parsedData.push(reqBody);
    fs.writeFileSync("product.json",JSON.stringify(parsedData , null ,2));
    res.status(201).send({message : "Product Created" , product : reqBody})

});
app.put("/updateProduct",()=>{});
app.delete("/deleteProduct",()=>{});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});