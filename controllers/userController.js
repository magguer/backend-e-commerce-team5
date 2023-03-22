const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.find();
  res.json(users);
}

// Display the specified resource.
async function show(req, res) {
  const userId = req.params.id;
  const user = await User.findById(userId);
  res.json(user);
}

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

// Show the form for editing the specified resource.
async function edit(req, res) {
  const bodyData = req.body;
  const userId = req.params.id;
  const user = await User.findByIdAndUpdate(
    { _id: userId },
    {
      firstname: bodyData.firstname,
      lastname: bodyData.lastname,
      password: bodyData.password,
      email: bodyData.email,
      address: bodyData.address,
    }
  );
  res.json(user);
}

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
  edit,
  destroy,
};
