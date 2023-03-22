const { Schema, mongoose } = require("../db");

const orderSchema = new Schema(
    {
        number: {
            type: Number,
        },
        status:
        {
            type: Schema.Types.ObjectId,
            ref: "Status",
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
        products: [],
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;