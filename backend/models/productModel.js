const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required: [true, 'A product must have a name'],
    },
    price:{
        type:Number,
        required: [true, 'A product must have a price'],
    },
    priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
    productType:{
        type:String,
        required: [true, 'A product must have a type'],
        enum: {
            values: ['t-shirt', 'socks', 'boxers','sun-glasses'],
            message: 'Difficulty is either: t-shirt, socks, boxers, sun-glasses'
          }
    },
    description:{
        type:String,
        default: 'a great product',
        required: [true, 'A product must have a description'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      smallStock:{
        default:0,
        type:Number,
        required:true
      },
      mediumStock:{
        default:0,
        type:Number,
        required:true
      },
      largeStock:{
        default:0,
        type:Number,
        required:true
      },
})

const Product = mongoose.model('Product' , productSchema) //model's variable name and name should start with a capital letter

module.exports= Product;