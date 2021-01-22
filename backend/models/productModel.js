import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    priceUSD: { type: Number, required: true },
    priceCAD: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    specification: { type: String },
    shipping: { type: String },
    onSale: { type: Boolean, required: true },
    reviews: [{ 
        author: { type: String, required: true },
        stars: { type: Number, required: true },
        pros: { type: String },
        cons: { type: String },
        detail: { type: String, required: true }
    }],
    numReviews: { type: Number },
    image: { type: String },
    images: [{ type: String }]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;