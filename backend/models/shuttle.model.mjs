import { Schema, model } from "mongoose";
import TempBooking from "./tempbooking.model.mjs";
import { v4 as uuidv4 } from "uuid";

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  passenger: String,
  seatNo: String,
});

const PassengerSchema = new Schema({
  bookBy: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  nationality: {
    type: String,
    default: "",
  },
  GID: {
    type: String,
    default: "",
  },
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
        setp: Number,
        passenger: {
          type: PassengerSchema,
        },
      },
    ],
    right: [
      {
        seat: String,
        reserve: Boolean,
        setp: Number,
        passenger: {
          type: PassengerSchema,
        },
      },
    ],
  },
  booking: [bookingSchema],
});

ShuttleSchema.pre("save", async function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }

  if (!this.status) {
    this.status = true;
  }

  try {
    // Create and save a TempBooking document associated with the shuttle's _id
    const tempBooking = new TempBooking({
      key: this.key,
      shuttle: this._id,
      fee: this.fee,
      seats: this.seats,
    });

    await tempBooking.save();
  } catch (error) {
    console.error("Error creating TempBooking:", error);
  }

  next();
});

const ShuttleModel = model("Shuttle", ShuttleSchema);

export default ShuttleModel;
