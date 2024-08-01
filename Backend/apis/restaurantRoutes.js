const express = require('express')
const router = express.Router();
const Restaurant = require('../models/restaurant')

// router.get('/restaurants', async (req, res) => {
//     try {
//         const { cuisines, rating, veg } = req.query;
//         const query = {};
//         console.log(rating, 'rating')

//         // Handle cuisine filter
//         if (cuisines) {
//             query.cuisines = cuisines;
//             console.log(cuisines, 'cuisines');
//         }

//         // // Handle rating filter
//         if (rating) {
//             // const { min, max } = JSON.parse(rating); // Parse rating object from string
//             const { min, max } = rating;
           
//             query.avgRating = { $gte: parseFloat(min), $lte: parseFloat(max) };
//         }

//         // Handle veg filter
//         if (veg) {
//             query.veg = 'veg'; // Assuming veg is a boolean
//             console.log(veg, 'veg');
//         }
//         console.log(query, 'query');

//         // Fetch filtered restaurants
//         const filteredRestaurants = await Restaurant.find(query).populate('cuisines');
//         res.status(200).json(filteredRestaurants);
        
//     } catch (e) {
//         console.error('Error fetching restaurants:', e);
//         res.status(500).json({ msg: e.message });
//     }
// });

router.get('/restaurants', async (req, res) => {
    try {
        console.log(req.query, 'req.query')
        const { cuisine, rating_range , pure_veg} = req.query;
        const query = {};
        
        // Handle cuisine filter
        if (cuisine) {
            // console.log(cuisine, 'cuisine');
            query["cuisines.name"] = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
        }

        // Handle rating filter
        if (rating_range) {
            const [min, max] = rating_range.split('-').map(Number);
            query.avgRating = { $gte: min, $lte: max };
            // console.log(min, max, 'rating_range');
        }
        if (pure_veg) {
            query.pureVeg = {$eq: true}
        }

        // console.log(query, 'query');

        // Fetch filtered restaurants
        const filteredRestaurants = await Restaurant.find(query).populate('reviews');
        res.status(200).json(filteredRestaurants);
        
    } catch (e) {
        console.error('Error fetching restaurants:', e);
        res.status(500).json({ msg: e.message });
    }
});


// router.get('/restaurants/filterByRating', async (req, res) => {
//     try {
//         console.log('Backend route hit:', req.query);
//         let { minRating, maxRating } = req.query;
//         if (!minRating) {
//             return res.status(400).json({ msg: 'minRating is required' });
//         }
        
//         if (!maxRating) {
//             maxRating = 5.0;
//         }
        
//         const restaurants = await Restaurant.find({
//             avgRating: { $gte: parseFloat(minRating), $lte: parseFloat(maxRating) }
//         }).populate('cuisines')

//         res.status(200).json(restaurants);
//     } catch (e) {
//         console.error('Error fetching restaurants by rating:', e);
//         res.status(500).json({ msg: e.message });
//     }
// });

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
