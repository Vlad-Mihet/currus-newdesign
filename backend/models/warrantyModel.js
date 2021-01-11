import mongoose from 'mongoose'

const warrantySchema = new mongoose.Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    order: { type: String, required: true  },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    model: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true 
});

const Warranty = mongoose.model('Warranty', warrantySchema)

export default Warranty;


