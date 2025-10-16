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

const createProduct = async (req,res)=>{
    try {
        const reqBody = req.body;
    const product = await Product.create(reqBody);
    res.status(201).send({message : "Product Created" , product : product});
    } catch (error) {
        res.status(500).send({error : "Error Creating Product"});
    }
};

const updateProduct = async (req,res)=>{
   try {
    const {productId } = req.params;
    const product = await Product.findById(productId);
    if(!product) return res.status(404).send({error : "Product Not Found"})
    const updatedProduct = await Product.findByIdAndUpdate(productId , req.body,{new : true});
     res.status(202).send({message : "Product Updated" , product : updatedProduct});
   } catch (error) {
    res.status(500).send({error : "Error updating product"});
   }
};

const deleteProduct = async (req,res)=>{
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);
    if(!product) return res.status(404).send({error : "Product Not Found"})
    const deletedProduct = await Product.findOneAndDelete(productId);
     res.status(202).send({message : "Product Deleted"});
    } catch (error) {
        res.status(500).send({error : "Error Deleting product"});
    }
};

module.exports = {getAllProduct , getProductById , createProduct , updateProduct , deleteProduct};