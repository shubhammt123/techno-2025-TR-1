const express = require("express");
const {getAllProduct , getProductById  , createProduct , updateProduct , deleteProduct} = require("../controller/product");

const router = express.Router();


router.get("/getAllProduct",getAllProduct);
router.get("/getProductById/:productId",getProductById);
router.post("/createProduct",createProduct);
router.put("/updateProduct/:productId",updateProduct);
router.delete("/deleteProduct/:productId",deleteProduct);


module.exports = router;