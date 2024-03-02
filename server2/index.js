const express = require("express")
const postRouter = require("./router/post.router")
const PORT = 4000 

const app = express()
app.use(express.json())

app.use("/posts",postRouter)

app.listen(PORT,()=>console.log(`listing to http://localhost:${PORT}`))