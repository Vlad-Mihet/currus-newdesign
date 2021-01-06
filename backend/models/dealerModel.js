import mongoose from 'mongoose'

const dealerSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true  },
    phonenumber: { type: String, required: true },
    storeaddress: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true 
});

const Dealer = mongoose.model('Dealer', dealerSchema)

export default Dealer;