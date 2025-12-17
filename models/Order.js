// Small Restaurant Order Management System
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [{
    menuId: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    quantity: Number,
    itemTotal: Number
  }],
  totalAmount: Number,
  status: {
    type: String,
    default: 'Pending'
  }
});

export default mongoose.model('Order', orderSchema);
