import mongoose, { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const FeeSchema = new Schema({
  key: {
    type: String,
  },
});

FeeSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const feeModel = model("Fee", FeeSchema);
export default feeModel;
