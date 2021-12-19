const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser=require('body-parser');

const adminRoutes = require('./routes/adminroutes');
const customerRoutes = require('./routes/customerroutes');


mongoose.connect('mongodb://localhost:27017/orderbooksystem',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
});

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/views'));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride('_method'));
    app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('showorders')
})

app.use(adminRoutes);
app.use(customerRoutes);

app.listen(3000, () => {
    console.log("Server Started AT PORT 3000");
})
    
    