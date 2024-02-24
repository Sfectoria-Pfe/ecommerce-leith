let products = require("../data.json");

const selectAll = (request, responce) => {
  responce.send(products);
};

const search = (req, res) => {
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
};

const createProduct = (request, responce) => {
  products.push(request.body);
  responce.status(201).send(products);
};

const findOne = (req, res) => {
  const found = products.filter(e => e.id === +req.params.id);
  res.send(found);
};

const deleteProduct = (request, responce) => {
  let id = +request.params.id;
  let newProduct = products.filter(e => e.id !== id);

  if (JSON.stringify(newProduct) !== JSON.stringify(products)) {
    products = newProduct;

    responce.status(202).send(products);
  } else {
    responce.status(400).send("mch mawjouuuud");
  }
};



module.exports = {deleteProduct ,findOne,createProduct,selectAll, search }