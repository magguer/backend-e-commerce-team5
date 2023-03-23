const { Schema, mongoose } = require("../db");

const arrayImages = new Schema({
  original: String,
  thumbnail: String,
});

const productSchema = new Schema(
  {
    brand: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    images: [arrayImages],
    highlight: {
      type: Boolean,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    subtitle: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    // subcategory: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;