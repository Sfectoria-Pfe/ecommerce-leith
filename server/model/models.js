const mongoose= require("mongoose")
const db = require("./index")


const productSchema = new mongoose.Schema({
    id : Number,
    productName: String , 
    imageURL: String,
    price: Number,
    description: String,
    category:String 
})

const Product = mongoose.model("products",productSchema)

const orderSchema = new mongoose.Schema({
    id : Number , 
    price : Number , 
    client : String 
})

const Order = mongoose.model("orders",orderSchema)


module.exports = {Product,Order}