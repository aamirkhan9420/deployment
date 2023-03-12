const mongoose=require('mongoose')
const cartschema= mongoose.Schema({

    title:String,
    id:Number,
    price:String,
    description:String,
    category:String,
    image:String,
    rating:Object,
    quantity:Number,

})
const CartModel=mongoose.model("cart",cartschema)
module.exports={CartModel}

