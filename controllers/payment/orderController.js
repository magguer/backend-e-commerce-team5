const { Order } = require("../../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.find();
  res.json(orders);
}

async function lastOrders(req, res) {
  const orders = await Order.find()
    .sort({ $natural: -1 })
    .limit(10)
    .populate("user")
    .populate("status");
  res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);
  res.json(order);
}

<<<<<<< HEAD:controllers/payment/orderController.js
=======
// Show the form for creating a new resource
async function create(req, res) {}

>>>>>>> parent of 5180743 (order-populated):controllers/orderController.js
// Store a newly created resource in storage.
async function store(req, res) {
  console.log({ post: req.body });
  const bodyData = req.body;
  const order = await Order.create({
    status: bodyData.status,
    user: bodyData.user,
    products: bodyData.products,
    details: bodyData.details,
    totalPrice: bodyData.totalPrice,
  });
  res.json(order);
}

<<<<<<< HEAD:controllers/payment/orderController.js
=======
// Show the form for editing the specified resource.
async function edit(req, res) {}

>>>>>>> parent of 5180743 (order-populated):controllers/orderController.js
// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  lastOrders,
  show,
  store,
  update,
  destroy,
};
