import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const PaymentSchema = new Schema({
  key: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  shuttle: {
    type: String,
  },
  PPT: {
    type: String,
  },
  bookBy: {
    type: String,
  },
});

PaymentSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const PaymentModel = model("Payment", PaymentSchema);
export default PaymentModel;
