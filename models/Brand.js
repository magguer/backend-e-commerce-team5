const { Schema, mongoose } = require("../db");

const brandsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
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

const Brands = mongoose.model("Brands", brandsSchema);

module.exports = Brands;
