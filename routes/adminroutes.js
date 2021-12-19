const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/orders', async(req, res) => {
    try {
        const orders=await Order.find({});
        //res.render('showorders',{orders}); 
        res.json(orders);
    } catch (e) {
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find Orders');
    }
})

module.exports = router;