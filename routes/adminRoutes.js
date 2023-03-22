const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const adminController = require("../controllers/adminController");

router.use(
  checkJwt({
    secret: process.env.SESSION_SECRET,
    algorithms: ["HS256"],
  })
);

router.get("/", adminController.index);
router.post("/", adminController.create);
router.get("/:id", adminController.show);
router.patch("/:id", adminController.edit);
router.delete("/:id", adminController.destroy);

module.exports = router;
