const express = require("express");
const app = express();


require('dotenv').config();
require("./model/index");

const port = 3100;
const path = require("path");

const cors = require("cors");

const productRoute = require("./routes/product.route");

app.use(cors({ }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "publics")));

app.use("/api/v1/products",productRoute)


app.listen(port, () => {
  console.log(`listning too`);
});
























// app.get("/test", (request, responce) => {
//   responce.send("hello express server");
// });

// app.get("/products", (request, responce) => {
//   responce.send(products);
// });

// app.post("/search", (req, res) => {
//   const { text } = req.body;
//   res
//     .status(200)
//     .send(
//       products.filter(
//         (elem) =>
//           elem.productName.toUpperCase().includes(text.toUpperCase()) ||
//           elem.description.toUpperCase().includes(text.toUpperCase())
          
//       )
//     );
// });
// app.get("/oneproduct/:id", (req, res) => {
//   const {id}=req.params
//  let product=products.find(elem=>elem.id===+id)
//  if(product){
//   res.status(200).send(product)
//  }else
//  res.send('id mch mwjoud')
          
          
   
// });

// app.post("/product", (request, responce) => {
//   products.push(request.body);
//   responce.status(201).send(products);
// });
// app.delete("/delete/:id", (request, responce) => {
//   let id = +request.params.id;
//   let newProduct = products.filter((e) => e.id !== id);

//   if (JSON.stringify(newProduct) !== JSON.stringify(products)) {
//     products = newProduct;

//     responce.status(202).send(products);
//   } else {
//     responce.status(400).send("mch mawjouuuud");
//   }
// });

