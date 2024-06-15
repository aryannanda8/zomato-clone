const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    name: { type: String, required: false },

});

let Cuisine = mongoose.model('Cuisine', cuisineSchema);
module.exports = Cuisine;