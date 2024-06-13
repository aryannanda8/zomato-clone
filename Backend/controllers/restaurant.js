const Restaurant = require('../models/restaurant')

const showAllRestaurants = async (req, res) => {
    try {
        let allRestaurants = await Restaurant.find({})
        res.status(200).json(allRestaurants);
    }
    catch (e) {
        res.status(400).json({msg: e})
    }
}

module.exports = showAllRestaurants;