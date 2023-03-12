const express = require("express")

const { CartModel } = require("./models/cart.model")
const app = express()
let cors = require("cors")
let {connection}=require("./confige/db")
app.use(express.json())
require("dotenv").config()

const PORT = process.env.PORT || 8500
app.use(cors({
    origin: "*"

}))


app.get("/cart", async (req, res) => {

    try {
        const result = await CartModel.find()
        res.send({ "msg": result })
    } catch (error) {
        res.send({ "msg": error })
    }

})
app.post("/addcart", async (req, res) => {
    const data = req.body

    const new_cart = new CartModel(data)
    await new_cart.save()
    const result = await CartModel.find()
    res.send({ "msg ": result })

})
app.patch("/editcart/:id", async (req, res) => {
    let data = req.body
    let id = req.params.id
    console.log(id)
    try {
        const new_cart = await CartModel.findByIdAndUpdate({ _id: id }, data)
        const result = await CartModel.find()
        res.send({ "msg ": result })
    } catch (error) {
        res.send({ "msg ": error })
    }
    

})
app.delete("/deletecart/:id", async (req, res) => {

    let id = req.params.id
    const new_cart = await CartModel.findByIdAndDelete({ _id: id })
    const result = await CartModel.find()
    res.send({ "msg ": result })

})

app.listen(PORT, async(req, res) => {
    try {
        await connection
        console.log(`listening on port ${PORT}`)
    } catch (error) {
        
    }
    
})
