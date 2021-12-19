const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    StockId: {
        type: String,
        required: true,
        unique:true
    },
    StockName: {
        type: String,
        required:true
    },
    OrderQty: {
        type: Number
    },
    OrderType:{
        type:String,
        required:true
    },
    ExexutedQty:{
        type:Number
    },
    Price:{
        type:Number
    },
    OrderStatus:{
        type:String
    },
    OrderTime:{
        type:Date
    }
})
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;