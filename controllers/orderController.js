import Order from '../models/Order.js';
import Menu from '../models/Menu.js';

export const createOrder = async (req, res) => {
  if (!Array.isArray(req.body.items) || req.body.items.length === 0) {
    return res.status(400).json({ message: "Items must be a non-empty array" });
  }

  let total = 0;
  let items = [];

  for (const i of req.body.items) {
    const m = await Menu.findById(i.menuId);
    if (!m) return res.status(404).json({ message: `Menu item not found: ${i.menuId}` });

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
  res.status(201).json(order);
};

// NEW: Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
