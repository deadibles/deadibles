const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than one'],
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
} );

module.exports = Order = mongoose.model( 'order', OrderSchema );