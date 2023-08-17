import { Schema, SchemaType, model } from "mongoose";
import Fee from "../models/fee.model.mjs";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  passenger: String,
  seatNo: String,
});

const ShuttleSchema = new Schema({
  key: {
    type: String,
  },
  status: {
    type: Boolean,
    required: true,
  },
  depPort: {
    type: String,
    required: true,
  },
  arriPort: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  fee: {
    type: Schema.Types.ObjectId,
    ref: "Fee",
  },
  booking: [bookingSchema],
});

ShuttleSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const ShuttleeModel = model("Service", ShuttleSchema);
export default ShuttleeModel;
