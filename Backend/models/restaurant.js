const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  image: {
    type: String, required: true,
    default: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png'
  },
  deliveryTime: { type: String, default: null },

  approxPrice: { type: String, required: true },

  cuisines: [
    { type: Schema.Types.ObjectId, ref: 'Cuisine' }
  ],
  
  type: { type: String, required: true },
  bottomContainers: { type: Array, default: [] },
  goldOff: { type: String, default: null },
  locality: { type: String, default: null },
  distance: { type: String, default: null },
  cardAction: { type: String },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],

  avgRating: { type: Number, default: 0 },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
