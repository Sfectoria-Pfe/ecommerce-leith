const express = require("express");
const { getAllPosts, addPost } = require("../controller/post.controller");
const postRouter = express.Router()


postRouter.get("/",getAllPosts); 
postRouter.post("/",addPost); 


module.exports = postRouter