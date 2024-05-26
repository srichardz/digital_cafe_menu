import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  item: String,
  paid: Boolean
});

const Order = model('Order', orderSchema);
export default Order;