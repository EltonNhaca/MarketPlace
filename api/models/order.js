const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    shippingAddres: {
        name: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        houseNo: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        }
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

const order = mongoose.model("Order", orderSchema);
module.exports = order;