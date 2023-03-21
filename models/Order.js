const { Schema, mongoose } = require("../db");

const orderSchema = new Schema(
    {
        number: {
            type: number,
        },
        paymentDate: {
            type: Date,
            required: true
        },
        shippingDate: {
            type: Date,
            required: true
        },
        arrivalDate: {
            type: Date,
            required: true
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;