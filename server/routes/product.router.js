const productsRoute = require("express").Router();

const {
  selectAll,
  search,
  createProduct,
  findOne,
  deleteProduct,
} = require("../controller/products.controller");
/**
 * @swagger
 * /api/v1/products/:
 *   get:
 *     summary: Lists all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 * */
productsRoute.get("/", selectAll);

/**
 * @swagger
 * /api/v1/products/:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              id:
 *                type:number
 *              productName:
 *                type:string
 *              imageURL:
 *                type:string
 *              price:
 *                type:number
 *              description:
 *                type:string
 *              category:
 *                type:string
 *     responses:
 *       200:
 *         description: The created book.
 *       500:
 *         description: Some server error
 * */
productsRoute.post("/search", search);
productsRoute.post("/", createProduct);
productsRoute.get("/:id", findOne);
productsRoute.delete("/:id", deleteProduct);

module.exports = productsRoute;
