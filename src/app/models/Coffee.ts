import { model, models, Schema } from 'mongoose';

export interface Coffee {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

const CoffeeSchema = new Schema<Coffee>({
  drink_name: {
    type: String,
    required: [true, "Please provide a name for this coffee."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  allergen_info: {
    /* The owner of this pet */
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  }
});

const Coffee = models.Coffee || model('Coffee', CoffeeSchema);
export default Coffee;