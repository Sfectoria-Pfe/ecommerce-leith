const productsRoute = require("express").Router();

const { selectAll, search, createProduct, findOne, deleteProduct } = require("../controller/products.controller");


productsRoute.get("/", selectAll);
productsRoute.post("/search", search);

productsRoute.post("/",createProduct);

productsRoute.get("/:id",findOne);

// productsRoute.get("/:id",functionController)
productsRoute.delete("/:id",deleteProduct);
// productsRoute.put("/:id",functionController)



module.exports = productsRoute;
