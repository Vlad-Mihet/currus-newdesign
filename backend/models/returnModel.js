import mongoose from 'mongoose'

const returnSchema = new mongoose.Schema({
    vendor: { type: String, required: true },
    action: { type: String, required: true },
    sku: { type: String, required: true  },
    serial: { type: String, required: true },
    quantity: { type: String, required: true },
    date: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    order: { type: String, required: true },
    street: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true 
});

const Return = mongoose.model('Return', returnSchema)

export default Return;


