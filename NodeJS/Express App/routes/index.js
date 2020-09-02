const express = require("express");
const router  = express.Router();
const path = require("path");
const fs = require("fs");

const data = require("../data/seed.json");
let productData = data;
console.log(productData.products.length);
let nextID = productData.products[productData.products.length-1].id + 1;
//root route
router.get("/", function(req, res){
    const landingPagePath = path.join(__dirname, "..", "views" , "landing.ejs");
    res.render(landingPagePath);
});

router.get("/products" , function(req, res){
    if(req.query.format==="json"){
        res.json(productData);
    }
    const productsPagePath = path.join(__dirname, "..", "views" , "products.ejs");
    res.render(productsPagePath, {products:productData.products});
});

router.get("/products/:id" ,  function(req, res){
    const id = req.params.id;
    const product = productData.products.find(p => p.id === parseInt(id));

    res.json(product);
});

router.post("/products" , function(req, res){
    productData.products.push({...req.body, id:nextID})
    nextID++;
    res.json(productData.products);

});

module.exports = router;