const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.find();
  res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);
  res.json(order);
}

// Show the form for creating a new resource
async function create(req, res) {
  const bodyData = req.body;
  const newAdmin = await Admin.create({
    status: bodyData.status,
    lastname: bodyData.lastname,
    email: bodyData.email,
    password: await bcrypt.hash(bodyData.password, 8),
    rol: bodyData.rol,
  });

  res.json(newAdmin);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
