const { Schema, mongoose } = require("../db");

const statusSchema = new Schema(
    {
        name: {
            type: String,
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ]
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;