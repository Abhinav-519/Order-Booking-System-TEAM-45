const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/orders/new' ,(req, res) => {
    res.render('neworder')
})

router.post('/orders', async(req, res) => {
    try {
        console.log(req.body);
        await Order.create(req.body);
        //req.flash('success', 'Product Created Successfully');
        //res.redirect('/orders');
    }
    catch (e) {
        console.log(e.message);
        //req.flash('error', 'Cannot Create Orders,Something is Wrong');
    } 
});

router.get('/error', (req, res) => {
    console.log("error");
})


module.exports = router;