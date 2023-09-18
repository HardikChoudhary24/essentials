const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    gender:String,
    name:String,
    price:Number,
    category:String,
    subCategory:String,
    availableColors:[String],
    availableSizes:[String],
    allReviews:[{
        Username:String,
        rating:Number,
        review:String,
    }],
    allImages:[String],
})