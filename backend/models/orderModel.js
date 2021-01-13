import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    }],
    shippingAddress: {
        address: { type: String, required: true },
        town: { type: String, required: true },
        state: { type: String, required: true },
        postcode: { type: String, required: true }
    },
    itemsPrice: {
        type: Number, required: true
    },
    shippingPrice: {
        type: Number, required: true
    },
    totalPrice: {
        type: Number, required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
export default Order