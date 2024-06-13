const express = require('express')
const mongoose = require('mongoose')
const seedDb = require('./seed')
const app = express();
const restaurantRoutes = require('./apis/restaurantRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/Zomato')
    .then(() => {
        console.log('db connected successfully');
    })
    .catch((e) => {
        console.log('error in connecting db', e);
    })

app.get('/', (req, res) => {
    res.send('hello')
})

// seedDb();

app.use(restaurantRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})