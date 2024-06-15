const express = require('express')
const router = express.Router();
const Restaurant = require('../models/restaurant')
const Review = require('../models/review')

router.post('/restaurants/:restaurantId/review', async (req, res) => {
    let { rating, comment } =req.body;
    let { restaurantId } = req.params;

    try {
        const review = await Review.create({ rating, comment });
        const restaurant = await Restaurant.findById(restaurantId)
        
        //avg rating
        const newAverageRating = ((restaurant.avgRating * restaurant.reviews.length) + parseInt(rating)) / (restaurant.reviews.length + 1);
        restaurant.avgRating = parseFloat(newAverageRating.toFixed(1));

        restaurant.reviews.push(review);
        await restaurant.save()
        
        res.status(201).json({review, message: 'Review added successfully'})
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Server error'})
    } 
})

module.exports = router;