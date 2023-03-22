const { Admin, User } = require("../models");

// Display a listing of users
async function index(req, res) {
  const admins = await Admin.find();
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
  const bodyData = req.body;
  const newAdmin = await Admin.create({
    firstname: bodyData.firstname,
    email: bodyData.email,
    password: bodyData.password,
    rol: bodyData.rol,
  });
  res.json(newAdmin);
}

// Store a newly created resource in storage.
async function store(req, res) {}

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

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
