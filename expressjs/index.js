const express = require("express");
const fs = require("fs");
const productRoutes = require("./router/product");
const authRoutes =  require("./router/user");
const loggerMiddleware = require("./middleware/loggerMiddileware");
const connectDb = require("./config/db");
const cors = require("cors");
const app = express();

// create - POST
// read - GET
// update - PUT
// delete - DELETE

app.use(cors());
app.use(express.json());


connectDb();

app.use(loggerMiddleware);
// product CRUD
// list of all product - search  - GET
// information of a particular product - GET
// create product - POST
// update product - PUT
// delete product - DELETE

// MVC - model , router , controller

//  index.js <-- router <-- controller <-- model
// http://localhost:3000/product/getAllProduct

app.use("/product",productRoutes);
app.use("/auth",authRoutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

