const express = require("express");
const app = express();
const port = 3100;
const cors = require("cors");
let products = require("./data");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/test", (request, responce) => {
  responce.send("hello express server");
});

app.get("/products", (request, responce) => {
  responce.send(products);
});

app.get("/product/:id", (request, response) => {
  const { id } = request.params;
  let myProduct = products.find(elem => elem.id === +id); // return one elem
  if (myProduct) response.send(myProduct);
  else response.status(400).send("id not found");
});

app.post("/search", (req, res) => {
  const { text } = req.body;
  res
    .status(200)
    .send(
      products.filter(
        elem =>
          elem.productName.toUpperCase().includes(text.toUpperCase()) ||
          elem.description.toUpperCase().includes(text.toUpperCase())
      )
    );
});

app.post("/product", (request, responce) => {
  products.push(request.body);
  responce.status(201).send(products);
});
app.delete("/delete/:id", (request, responce) => {
  let id = +request.params.id;
  let newProduct = products.filter(e => e.id !== id);

  if (JSON.stringify(newProduct) !== JSON.stringify(products)) {
    products = newProduct;

    responce.status(202).send(products);
  } else {
    responce.status(400).send("mch mawjouuuud");
  }
});

app.listen(port, () => {
  console.log(`listning too`);
});
