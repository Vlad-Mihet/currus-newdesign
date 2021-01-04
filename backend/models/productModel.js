import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    specification: { type: String },
    shipping: { type: String }
});

const Product = mongoose.model('Product', productSchema);

export default Product;