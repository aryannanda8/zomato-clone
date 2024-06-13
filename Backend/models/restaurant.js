const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  deliveryTime: { type: String, default: null },
  rating: {
    rating_text: { type: String, required: true },
    rating_color: { type: String, default: "green" }
  },
  approxPrice: { type: String, required: true },
  // offers: [{
  //   text: { type: String, required: true },
  //   color: {
  //     tint: { type: String, required: true },
  //     type: { type: String, required: true }
  //   }
  // }],
  cuisine: [
    {
      "url": String,
      "name": String
    } 
  ],
  type: {type:String, required: true},
  bottomContainers: { type: Array, default: [] },
  goldOff: { type: String, default: null },
  locality: { type: String, default: null },
  distance: { type: String, default: null },
  cardAction: { type: String }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
