import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    _id: { type: String, required: false },
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    available: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);



const product = mongoose.models.product || mongoose.model("product", productSchema);

export default product;
