const { Admin } = require("../models");
const { Category } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of users
async function index(req, res) {
  const admins = await Admin.find();
  console.log(req.auth);
  res.json(admins);
}

// Display the specified resource.
async function show(req, res) {
  const adminId = req.params.id;
  const admin = await Admin.findById(adminId);
  res.json(admin);
}

// Show the form for creating a new resource
async function create(req, res) {
  const newAdmin = await Admin.create({
    firstname: bodyData.firstname,
    lastname: bodyData.lastname,
    email: bodyData.email,
    password: await bcrypt.hash(bodyData.password, 8),
    rol: bodyData.rol,
  });

  res.json(newAdmin);
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const bodyData = req.body;
  const adminId = req.params.id;
  const admin = await Admin.findByIdAndUpdate(
    { _id: adminId },
    {
      firstname: bodyData.firstname,
      email: bodyData.email,
      password: bodyData.password,
      rol: bodyData.rol,
    },
    { returnOriginal: false }
  );
  res.json(admin);
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const adminId = req.params.id;
  const deletedAdmin = await Admin.findById(adminId);
  const admin = await Admin.findOneAndDelete({ id: adminId });
  res.json({
    message: `The Admin ${deletedAdmin.firstname} was deleted`,
  });
}

//// create token

async function createToken(req, res) {
  const categories = await Category.find({ name: "Electric" }).populate(
    "products"
  );
  console.log(categories);
  try {
    const admin = await Admin.findOne({ email: req.body.email });

    const matchPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );

    if (admin && matchPassword) {
      const token = jwt.sign({ adminId: admin.id }, process.env.SESSION_SECRET);
      res.json({
        admin: {
          id: admin._id,
          firstname: admin.firstname,
          lastname: admin.lastname,
          email: admin.email,
          rol: admin.rol,
          token: token,
        },
        categories,
      });
    } else res.json("No existe este administrador");
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
  update,
  destroy,
  createToken,
};
