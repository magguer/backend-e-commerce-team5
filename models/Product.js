const { Schema, mongoose } = require("../db");

const productSchema = new Schema(
    {
        brand: {
            type: String,
            require: true
        },
        model: {
            type: String,
            require: true
        },
        slug: {
            type: String,
            require: true
        },
        image: [{
            type: String,
            require: true
        }],
        highlight: {
            type: Boolean,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        stock: {
            type: Number,
            require: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        subcategory: {
            type: String,
            require: true
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
