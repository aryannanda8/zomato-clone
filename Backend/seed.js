const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')

let dummyRestaurants = [
    {
        name: "McDonald's",
        image: "https://b.zmtcdn.com/data/pictures/chains/1/171/3750aac8d138fbee606579cf54412b88_o2_featured_v2.jpg",
        deliveryTime: "24 min",
        rating: {
            rating_text: "4.2",
            rating_color: "5BA829"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/burger/", name: "Burger" },
            { url: "https://www.zomato.com/ncr/restaurants/wraps/", name: "Wraps" },
            { url: "https://www.zomato.com/ncr/restaurants/fast-food/", name: "Fast Food" },
            { url: "https://www.zomato.com/ncr/restaurants/beverages/", name: "Beverages" }
        ],
        type: "delivery",
        bottomContainers: [],
        goldOff: null,
        locality: "Janpath, New Delhi",
        distance: "1.2 km",
        cardAction: "/ncr/mcdonalds-1-janpath-new-delhi/order"
    },
    {
        name: "Haldiram's",
        image: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg",
        deliveryTime: "36 min",
        rating: {
            rating_text: "3.3",
            rating_color: "CDD614"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/north-indian/", name: "North Indian" },
            { url: "https://www.zomato.com/ncr/restaurants/chinese/", name: "Chinese" },
            { url: "https://www.zomato.com/ncr/restaurants/south-indian/", name: "South Indian" },
            { url: "https://www.zomato.com/ncr/restaurants/sandwich/", name: "Sandwich" },
            { url: "https://www.zomato.com/ncr/restaurants/pasta/", name: "Pasta" },
            { url: "https://www.zomato.com/ncr/restaurants/desserts/", name: "Desserts" },
            { url: "https://www.zomato.com/ncr/restaurants/beverages/", name: "Beverages" }
        ],
        type: "delivery",
        bottomContainers: [],
        goldOff: null,
        locality: "Paharganj, New Delhi",
        distance: "2.2 km",
        cardAction: "/ncr/haldirams-paharganj-new-delhi/order"
    },
    {
        name: "Burger Singh - Big Punjabi Burgers",
        image: "https://b.zmtcdn.com/data/pictures/chains/1/310301/0bb4ccbc6a9fb81b05c4870715419519_o2_featured_v2.jpg",
        deliveryTime: "26 min",
        rating: {
            rating_text: "3.8",
            rating_color: "9ACD32"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/burger/", name: "Burger" },
            { url: "https://www.zomato.com/ncr/restaurants/fast-food/", name: "Fast Food" },
            { url: "https://www.zomato.com/ncr/restaurants/momos/", name: "Momos" },
            { url: "https://www.zomato.com/ncr/restaurants/beverages/", name: "Beverages" },
            { url: "https://www.zomato.com/ncr/restaurants/desserts/", name: "Desserts" }
        ],
        bottomContainers: [
            {
                image: {
                    url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    aspect_ratio: 2.66666666667
                },
                text: "Follows all Max Safety measures to ensure your food is safe"
            }
        ],
        type: "delivery",
        locality: "H-45, Connaught Place, New Delhi",
        distance: "1.2 km",
        cardAction: "/ncr/burger-singh-big-punjabi-burgers-connaught-place-new-delhi/order"
    },
    {
        name: "Veer Ji Malai Chaap Wale",
        image: "https://b.zmtcdn.com/data/pictures/chains/2/18901212/3be38d2e4f70d288ef36e9e0f0577616_o2_featured_v2.jpg",
        deliveryTime: "42 min",
        rating: {
            rating_text: "4.1",
            rating_color: "5BA829"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/north-indian/", name: "North Indian" },
            { url: "https://www.zomato.com/ncr/restaurants/rolls/", name: "Rolls" },
            { url: "https://www.zomato.com/ncr/restaurants/momos/", name: "Momos" },
            { url: "https://www.zomato.com/ncr/restaurants/biryani/", name: "Biryani" },
            { url: "https://www.zomato.com/ncr/restaurants/chinese/", name: "Chinese" },
            { url: "https://www.zomato.com/ncr/restaurants/shake/", name: "Shake" },
            { url: "https://www.zomato.com/ncr/restaurants/beverages/", name: "Beverages" }
        ],

        bottomContainers: [
            {
                image: {
                    url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    aspect_ratio: 2.66666666667
                },
                text: "Follows all Max Safety measures to ensure your food is safe"
            }
        ],
        type: "delivery",
        locality: "Shop 89, Flyover Market, Defence Colony, New Delhi",
        distance: "6 km",
        cardAction: "/ncr/veer-ji-malai-chaap-wale-defence-colony-new-delhi/order"
    }
    ,
    {
        name: "Wendy's Burgers",
        image: "https://b.zmtcdn.com/data/pictures/8/19561158/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.jpg",
        deliveryTime: "30 min",
        rating: {
            rating_text: "3.9",
            rating_color: "9ACD32"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/burger/", name: "Burger" },
            { url: "https://www.zomato.com/ncr/restaurants/fast-food/", name: "Fast Food" },
            { url: "https://www.zomato.com/ncr/restaurants/american/", name: "American" }
        ],
        type: "delivery", 
        bottomContainers: [
            {
                image: {
                    url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    aspect_ratio: 2.66666666667
                },
                text: "Follows all Max Safety measures to ensure your food is safe"
            }
        ],
        locality: "Rajendra Place, New Delhi",
        distance: "3.7 km",
        cardAction: "/ncr/wendys-burgers-rajendra-place-new-delhi/order"
    },
    {
        name: "Kwality Wall’s Frozen Dessert and Ice Cream Shop",
        image: "https://b.zmtcdn.com/data/pictures/chains/5/19144765/e438e469284b1c95e630b130b3ce2487_o2_featured_v2.jpg",
        deliveryTime: "33 min",
        rating: {
            rating_text: "4.5",
            rating_color: "3F7E00"
        },
        approxPrice: "₹100 for one",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/ice-cream/", name: "Ice Cream" },
            { url: "https://www.zomato.com/ncr/restaurants/desserts/", name: "Desserts" }
        ],
        type: "delivery", 
        bottomContainers: [],
        locality: "Karol Bagh, New Delhi",
        distance: "4.1 km",
        cardAction: "/ncr/kwality-walls-frozen-dessert-and-ice-cream-shop-karol-bagh-new-delhi/order"
    },
    {
        name: "The Pizza Kings",
        image: "https://b.zmtcdn.com/data/pictures/5/19875315/ae57acb0089db1a2505bcfb73171d623_o2_featured_v2.jpg",
        deliveryTime: "46 min",
        rating: {
            rating_text: "3.6",
            rating_color: "#9ACD32"
        },
        approxPrice: "₹300 for two",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/pizza/", name: "Pizza" },
            { url: "https://www.zomato.com/ncr/restaurants/fast-food/", name: "Fast Food" },
            { url: "https://www.zomato.com/ncr/restaurants/shake/", name: "Shake" }
        ],
        type: "restaurant",
        bottomContainers: [
            {
                image: {
                    url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    aspect_ratio: 2.66666666667
                },
                text: "Follows all Max Safety measures to ensure your food is safe"
            }
        ],
        goldOff: null,
        locality: "Geeta Colony, New Delhi",
        distance: "6.8 km",
        cardAction: "/ncr/the-pizza-kings-geeta-colony-new-delhi/order"
    },
    {
        name: "Bikkgane Biryani",
        image: "https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg",
        deliveryTime: "20 min",
        rating: {
            rating_text: "4.1",
            rating_color: "#5BA829"
        },
        approxPrice: "₹700 for two",
        cuisine: [
            { url: "https://www.zomato.com/ncr/restaurants/biryani/", name: "Biryani" },
            { url: "https://www.zomato.com/ncr/restaurants/hyderabadi/", name: "Hyderabadi" },
            { url: "https://www.zomato.com/ncr/restaurants/andhra/", name: "Andhra" },
            { url: "https://www.zomato.com/ncr/restaurants/north-indian/", name: "North Indian" },
            { url: "https://www.zomato.com/ncr/restaurants/mughlai/", name: "Mughlai" }
        ],
        type: "restaurant",
        bottomContainers: [
            {
                image: {
                    url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    aspect_ratio: 2.66666666667
                },
                text: "Follows all Max Safety measures to ensure your food is safe"
            }
        ],
        goldOff: null,
        locality: "Connaught Place, New Delhi",
        distance: "854 m",
        cardAction: "/ncr/bikkgane-biryani-connaught-place-new-delhi/order"
    },
    {
        name: "Khadak Singh Da Dhaba",
        image: "https://b.zmtcdn.com/data/pictures/chains/6/18704536/4925df0169254d36473f3557c47c4257_o2_featured_v2.jpg",
        deliveryTime: "39 min",
        rating: {
          rating_text: "3.5",
          rating_color: "9ACD32"
        },
        approxPrice: "₹100 for one",
        cuisine: [
          {
            url: "https://www.zomato.com/ncr/restaurants/north-indian/",
            name: "North Indian"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/mughlai/",
            name: "Mughlai"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/rolls/",
            name: "Rolls"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/chinese/",
            name: "Chinese"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/biryani/",
            name: "Biryani"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/kebab/",
            name: "Kebab"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/momos/",
            name: "Momos"
          }
        ],
        type: "delivery",
        bottomContainers: [],
        goldOff: null,
        locality: "Defence Colony, New Delhi",
        distance: "6 km",
        cardAction: "/ncr/khadak-singh-da-dhaba-defence-colony-new-delhi/order"
      },
      {
        name: "Bikanervala",
        image: "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg",
        deliveryTime: "22 min",
        rating: {
          rating_text: "3.9",
          rating_color: "9ACD32"
        },
        approxPrice: "₹100 for one",
        cuisine: [
          {
            url: "https://www.zomato.com/ncr/restaurants/mithai/",
            name: "Mithai"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/north-indian/",
            name: "North Indian"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/south-indian/",
            name: "South Indian"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/chinese/",
            name: "Chinese"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/fast-food/",
            name: "Fast Food"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/street-food/",
            name: "Street Food"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/beverages/",
            name: "Beverages"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/desserts/",
            name: "Desserts"
          }
        ],
        type: "delivery",
        bottomContainers: [
          {
            image: {
              url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
              aspect_ratio: 2.66666666667
            },
            text: "Follows all Max Safety measures to ensure your food is safe"
          }
        ],
        goldOff: null,
        locality: "Karol Bagh, New Delhi",
        distance: "3 km",
        cardAction: "/ncr/bikanervala-karol-bagh-new-delhi/order"
      },
      {
        name: "Biryani Blues",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/301718/cf3d88dd0f49bd1251565de9c1de2ca7_o2_featured_v2.jpg",
        deliveryTime: "20 min",
        rating: {
          rating_text: "4.1",
          rating_color: "5BA829"
        },
        approxPrice: "₹250 for one",
        cuisine: [
          {
            url: "https://www.zomato.com/ncr/restaurants/biryani/",
            name: "Biryani"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/hyderabadi/",
            name: "Hyderabadi"
          },
          {
            url: "https://www.zomato.com/ncr/restaurants/mughlai/",
            name: "Mughlai"
          }
        ],
        type: "delivery",
        bottomContainers: [
          {
            image: {
              url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
              aspect_ratio: 2.66666666667
            },
            text: "Follows all Max Safety measures to ensure your food is safe"
          }
        ],
        goldOff: null,
        locality: "Connaught Place, New Delhi",
        distance: "1.1 km",
        cardAction: "/ncr/biryani-blues-connaught-place-new-delhi/order"
    },
    {
        name: "BOX8 - Desi Meals",
        image: "https://b.zmtcdn.com/data/pictures/chains/4/18793824/c6ee3d18909461075ef0f6eab8300913_o2_featured_v2.jpg",
        deliveryTime: "57 min",
        rating: {
          rating_text: "4.3"
        },
        approxPrice: "₹450 for two",
        cuisine: [
          {
            url: "",
            name: ""
          }
        ],
        type: "delivery",
        bottomContainers: [],
        goldOff: null,
        locality: "Paharganj, New Delhi",
        distance: "2.3 km",
        cardAction: "/ncr/box8-desi-meals-paharganj-new-delhi/order"
      },
      {
        name: "Subway",
        image: "https://b.zmtcdn.com/data/pictures/chains/7/147/33d108b0aec204dfae335507cc981e30_o2_featured_v2.jpg",
        deliveryTime: "22 min",
        rating: {
          rating_text: "3.7"
        },
        approxPrice: "₹400 for two",
        cuisine: [
          {
            url: "",
            name: ""
          }
        ],
        type: "delivery",
        bottomContainers: [],
        goldOff: null,
        locality: "Paharganj, New Delhi",
        distance: "1.5 km",
        cardAction: "/ncr/subway-paharganj-new-delhi/order"
      }
    


]

async function seedDb() {
    await Restaurant.insertMany(dummyRestaurants);
    console.log('db seeded');
}
module.exports = seedDb;