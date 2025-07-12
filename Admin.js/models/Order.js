// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    // Add other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

export default Order; // Default export
