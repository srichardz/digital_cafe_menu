import { model, models, Schema } from 'mongoose';

export interface Order {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

const OrderSchema = new Schema<Order>({
  drink_name: {
    type: String,
    required: [true, "Please provide a name for this coffee."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  allergen_info: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  }
});

const Order = models.Order || model('Order', OrderSchema);
export default Order;