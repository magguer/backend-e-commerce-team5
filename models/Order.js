const { Schema, mongoose } = require("../db");

const orderSchema = new Schema(
  {
    status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    shippingDate: {
      type: Date,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [],
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
