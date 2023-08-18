import { Schema, SchemaType, model } from "mongoose";

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
  carrier: {
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
  arrPort: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  duration: {
    type: String,
  },
  day: {
    type: String,
    required: true,
  },
  depTime: {
    type: String,
    required: true,
  },
  arrTime: {
    type: String,
    required: true,
  },
  fee: {
    type: Schema.Types.ObjectId,
    ref: "Fee",
  },
  seats: {
    left: [
      {
        seat: String,
        reserve: Boolean,
      },
    ],
    right: [
      {
        seat: String,
        reserve: Boolean,
      },
    ],
  },
  booking: [bookingSchema],
});

ShuttleSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }

  if (!this.status) {
    this.status = true;
  }

  next();
});

const ShuttleeModel = model("Shuttle", ShuttleSchema);
export default ShuttleeModel;
