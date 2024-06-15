const express = require('express')
const mongoose = require('mongoose')
const seedDb = require('./seed')
const app = express();
const restaurantRoutes = require('./apis/restaurantRoutes')
const reviewRoutes = require('./apis/reviewRoutes')
const cors = require('cors');
app.use(cors());
require('dotenv').config();


const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    console.log('root route hit');
    res.send('hello')
})


// seedDb();  

app.use(restaurantRoutes);
app.use(reviewRoutes);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server running at port ${port} version 5`);
});