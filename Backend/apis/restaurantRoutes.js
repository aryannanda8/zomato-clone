const express = require('express')
const router = express.Router();
const Restaurant = require('../models/restaurant')

router.get('/restaurants', async (req, res) => {
    try {
        let allRestaurants = await Restaurant.find({}).populate('cuisines')
        res.status(200).json(allRestaurants);
        
    }
    catch (e) {
        res.status(400).json({msg: e})
    }
})

router.get('/restaurants/filterByRating', async (req, res) => {
    try {
        console.log('Backend route hit:', req.query);
        const { minRating, maxRating } = req.query;
        if (minRating === undefined ) {
            return res.status(400).json({ msg: 'minRating is required' });
        }
        if (maxRating === undefined) {
            maxRating = 5;
        }
        const restaurants = await Restaurant.find({
            avgRating: { $gte: parseFloat(minRating), $lte: parseFloat(maxRating) }
        }).populate('cuisines')
        res.status(200).json(restaurants);
    } catch (e) {
        console.error('Error fetching restaurants by rating:', e);
        res.status(500).json({ msg: e.message });
    }
});

router.get('/restaurants/:id', async (req, res) => {
    try {
        const {id} = req.params
        let specificRestaurant = await Restaurant.findById(id).populate('reviews').populate('cuisines')
        res.status(200).json(specificRestaurant);
    }
    catch (e) {
        res.status(400).json({ msg: e });
    }
})

module.exports = router;
