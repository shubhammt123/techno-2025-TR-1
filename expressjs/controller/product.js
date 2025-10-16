const fs = require("fs");
const Product = require("../model/product");
const product = require("../model/product");

const getAllProduct = async (req,res)=>{
    try {
    const productData = await Product.find();
    console.log(productData)
    res.status(200).send({message : "Product Data Fetched" , products : productData});
    } catch (error) {
        res.status(500).send({error : "Error Fetching data"});
    }
};

const getProductById =  async (req,res)=>{
    try {
        const {productId} = req.params;
    const product = await Product.findById(productId);
    if(!product) return res.status(404).send({error : "Product Not Found"})
    res.status(200).send({message : "Product Fetched" , product : product});
    } catch (error) {
     res.status(500).send({error : "Error Fetching Data"});   
    }
};

const createProduct = (req,res)=>{
    const reqBody = req.body;
    console.log(reqBody)
    const productData = fs.readFileSync("product.json","utf-8");
    console.log(productData)
    const parsedData = JSON.parse(productData);
    const updatedReqBody = {...reqBody , id : Date.now()};
    parsedData.push(updatedReqBody);
    fs.writeFileSync("product.json",JSON.stringify(parsedData , null ,2));
    res.status(201).send({message : "Product Created" , product : updatedReqBody})
};

const updateProduct = (req,res)=>{
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
};

const deleteProduct = (req,res)=>{
    const {productId} = req.params;
     const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
     const filteredProduct = productData.filter((item)=>item.id !== +productId);
     fs.writeFileSync("product.json",JSON.stringify(filteredProduct , null , 2));
     res.status(202).send({message : "Product Deleted"});
};

module.exports = {getAllProduct , getProductById , createProduct , updateProduct , deleteProduct};