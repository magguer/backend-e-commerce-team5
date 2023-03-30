const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const userController = require("../controllers/userController");

router.post("/token", userController.createToken);
router.post("/", userController.create);

router.use(
  checkJwt({
    secret: process.env.SESSION_SECRET,
    algorithms: ["HS256"],
  })
);

router.get("/", userController.index);
router.get("/:id", userController.show);
router.patch("/:id/edit", userController.edit);
router.delete("/:id", userController.destroy);

module.exports = router;
