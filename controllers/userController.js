const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    password: await bcrypt.hash(`${bodyData.password}`, 8),
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
      password: await bcrypt.hash(`${bodyData.password}`, 8),
      email: bodyData.email,
      address: bodyData.address,
    },
    { returnOriginal: false }
  );
  res.json(user);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  res.json({ message: "The User was deleted", userDeleted: user });
}

//// create token

async function createToken(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    const matchPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (user && matchPassword) {
      const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET);
      res.json({
        token: token,
        user: { id: user._id },
      });
    } else res.json("No existe este usuario");
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User login failed",
      error: err.message,
    });
  }
}

module.exports = {
  index,
  show,
  create,
  edit,
  destroy,
  createToken,
};
