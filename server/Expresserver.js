const express = require('express')
const app = express()
const port = 3100;
let products = require("./data");


app.use(express.json())

app.get('/test',(request,responce)=>{
    responce.send('hello express server')
})

app.get('/get-product',(request,responce)=>{
    responce.send(products)
})

app.post('/get-product',(request,responce)=>{
    products.push(request.body)
    responce.status(201).send(products)
})
app.delete('/delete/:id',(request,responce)=>{
    let id = +request.params.id
    let newProduct=products.filter((e)=>e.id !== id)

    if(JSON.stringify(newProduct)!== JSON.stringify(products)){
        products = newProduct

        responce.status(202).send(products)

    }
    else {
        responce.status(400).send("mch mawjouuuud")


    }
})



app.listen(port,()=>{
console.log(`listning too`);
})