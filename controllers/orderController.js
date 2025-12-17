// Small Restaurant Order Management System
import Order from '../models/Order.js';
import Menu from '../models/Menu.js';

export const createOrder = async (req, res) => {
  let total = 0;
  let items = [];

  for (const i of req.body.items) {
    const m = await Menu.findById(i.menuId);
    const itemTotal = m.price * i.quantity;
    total += itemTotal;

    items.push({
      menuId: m._id,
      name: m.name,
      price: m.price,
      quantity: i.quantity,
      itemTotal
    });
  }

  const order = new Order({ items, totalAmount: total });
  await order.save();
  res.json(order);
};
