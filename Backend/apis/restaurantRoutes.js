const express = require('express')
const router = express.Router();
const Restaurant = require('../models/restaurant')

router.get('/allRestaurants', async (req, res) => {
    try {
        let allRestaurants = await Restaurant.find({})
        res.status(200).json(allRestaurants);
        
    }
    catch (e) {
        res.status(400).json({msg: e})
    }
})

module.exports = router;
