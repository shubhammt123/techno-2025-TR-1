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
app.get("/getProductById/:productId",(req,res)=>{
    const {productId} = req.params;
    console.log(typeof productId)
    const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
    const filteredData = productData.filter((item)=>item.id===+productId);
    if(filteredData.length === 0) return res.status(404).send({message : "Product not found"});
    res.status(200).send({message : "Product Fetched" , product : filteredData[0]});

});
app.post("/createProduct",(req,res)=>{
    const reqBody = req.body;
    console.log(reqBody)
    const productData = fs.readFileSync("product.json","utf-8");
    console.log(productData)
    const parsedData = JSON.parse(productData);
    const updatedReqBody = {...reqBody , id : Date.now()};
    parsedData.push(updatedReqBody);
    fs.writeFileSync("product.json",JSON.stringify(parsedData , null ,2));
    res.status(201).send({message : "Product Created" , product : updatedReqBody})
});
app.put("/updateProduct/:productId",(req,res)=>{
    const {productId } = req.params;
     const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
     const index = productData.findIndex((item)=>{
        return item.id === +productId;
     });
     if(index === -1) return res.status(404).send({message : "Product Not Found"});
     const updatedProduct = {...productData[index],...req.body};
     productData[index] = updatedProduct;
     console.log(productData)
     fs.writeFileSync("product.json",JSON.stringify(productData , null , 2));
     res.status(202).send({message : "Product Updated"});
});
app.delete("/deleteProduct/:productId",(req,res)=>{
    const {productId} = req.params;
     const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
     const filteredProduct = productData.filter((item)=>item.id !== +productId);
     fs.writeFileSync("product.json",JSON.stringify(filteredProduct , null , 2));
     res.status(202).send({message : "Product Deleted"});
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

