import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const restaurantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurantName: {
    type: String,
    requred: true,
  },
  city: {
    type: String,
    requred: true,
  },
  country: {
    type: String,
    requred: true,
  },
  deliveryPrice: {
    type: Number,
    requred: true,
  },
  estimatedDeliveryTime: {
    type: Number,
    requred: true,
  },
  cuisines: [
    {
      type: String,
      requred: true,
    },
  ],
  menuItems: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
