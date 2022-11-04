const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const PORT=process.env.PORT||8500


app.get("/",(req,res)=>{
    res.send("hlo world")
})
app.listen(PORT,(req,res)=>{
    console.log(`listnin on port${PORT}`)
})