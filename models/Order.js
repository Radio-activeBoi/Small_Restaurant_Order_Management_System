// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [{
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    name: String,
    price: Number,
    quantity: Number,
    itemTotal: Number
  }],
  totalAmount: Number,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
