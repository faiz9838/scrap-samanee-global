import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true }, // e.g., TMT Bars, Scrap Steel
    requiredQuantity: { type: Number, required: true }, // e.g., 5000
    unit: {
        type: String,
        enum: ['ton', 'units', 'pieces', 'sheets', 'meters'], // updated to suit hard/industrial goods
        default: 'ton',
    },
    preferredLocation: { type: String }, // e.g., Pan India, Gujarat
    description: { type: String }, // optional detailed requirement
    image: { type: String }, // optional reference image
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
    createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('productSchema', productSchema);
export default Product;
