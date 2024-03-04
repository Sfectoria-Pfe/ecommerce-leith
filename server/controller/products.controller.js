// let products = require("../data.json");
const { Product } = require("../model/models");

const selectAll = async (req, res) => {
  try {
    const response = await Product.find();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
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

const createProduct = async (req, res) => {
 try {
    let result = await Product.create(req.body)
    res.status(201).send(result)
 } catch (error) {
  console.log(error);
 }
};

const findOne = async (req, res) => {
  
  try {
    const found = await Product.findOne({id: +req.params.id});
if(found) {
  res.send(found)
}
else {
  res.status(400).send("not found")
}
  
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  
try {
  const result = await Product.deleteOne({id:+req.params.id})
  res.send(result)
  
} catch (error) {
  console.log(error);
}
};

module.exports = { deleteProduct, findOne, createProduct, selectAll, search };




// const allproducts=(request, responce) => {
//     responce.send(products);
//      }

// const postProduct=(request, responce) => {
//     products.push(request.body);
//     responce.status(201).send(products);
//      };

// const selectOneProduct=(req, res) => {
//            const {id}=req.params
//           let product=products.find(elem=>elem.id===+id)
//           if(product){
//            res.status(200).send(product)
//           }else
//           res.send('id mch mwjoud')
//          };

// const searchProduct=(req, res) => {
//       const { text } = req.body;
//       res
//         .status(200)
//         .send(
//           products.filter(
//             (elem) =>
//               elem.productName.toUpperCase().includes(text.toUpperCase()) ||
//               elem.description.toUpperCase().includes(text.toUpperCase())
              
//            )
//       );
//      }

// const deleteProduct=(request, responce) => {
//        let id = +request.params.id;
//        let newProduct = products.filter((e) => e.id !== id);
    
//        if (JSON.stringify(newProduct) !== JSON.stringify(products)) {
//          products = newProduct;
    
//          responce.status(202).send(products);
//        } else {
//          responce.status(400).send("mch mawjouuuud");
//        }
//      };


//      module.exports={allproducts,searchProduct,selectOneProduct,deleteProduct,postProduct}