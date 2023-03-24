const { Schema, mongoose } = require("../db");

const brandSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
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

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
