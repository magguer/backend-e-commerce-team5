const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const bodyData = req.body;
    const newUser = await User.create({
      firstname: bodyData.firstname,
      lastname: bodyData.lastname,
      password: bodyData.password,
      email: bodyData.email,
      address: bodyData.address,
    });
    res.json(newUser);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  res.json({ message: "The User was deleted", userDeleted: user });
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
