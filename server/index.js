const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

require("./model/index");
const path = require("path");
const port = 3100;
const cors = require("cors");
const productsRoute = require("./routes/product.router");
app.use(cors({ origin: process.env.allowedAdress }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "publics")));

app.use("/api/v1/products", productsRoute);
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "SFECTORIA Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`listning too`);
});
