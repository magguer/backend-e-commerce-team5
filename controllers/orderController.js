const { Order, Status, User, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.find().populate("user");
  res.json(orders);
}

async function lastOrders(req, res) {
  const orders = await Order.find()
    .sort({ $natural: -1 })
    .limit(10)
    .populate("user")
    .populate("status");
  /*   console.log(orders); */
  res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);
  res.json(order);
}

// Show the form for creating a new resource
async function create(req, res) { }

// Store a newly created resource in storage.
async function store(req, res) {
  const status = await Status.findOne({ name: "Processing" });
  const user = await User.findById(req.auth.userId);
  const bodyData = req.body;
  const order = await Order.create({
    status: status,
    user: user,
    products: bodyData.products,
    totalPrice: bodyData.totalPrice,
  });
  user.orders.push(order._id);
  user.save();
  res.json(order);
}

// Show the form for editing the specified resource.
async function edit(req, res) { }

// Update the specified resource in storage.
async function update(req, res) {
  const newStatus = await Status.findById(req.body.idStatus)
  await Order.findByIdAndUpdate(req.params.id, { status: newStatus })
  const order = await Order.findById(req.params.id)
  for (let detail of order.products) {
    const product = await Product.findById(detail.product._id)
    product.stock = product.stock - detail.quantity
    product.save()
  }
  return res.sendStatus(200);
}


// Remove the specified resource from storage.
async function destroy(req, res) { }

module.exports = {
  index,
  lastOrders,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
