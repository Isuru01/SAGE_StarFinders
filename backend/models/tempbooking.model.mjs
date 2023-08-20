import { Schema, SchemaType, model } from "mongoose";
import ServiceSchema from "./service.model.mjs";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const PassengerSchema = new Schema({
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

const TempBookingSchema = new Schema({
  key: {
    type: String,
  },
  shuttle: {
    type: Schema.Types.ObjectId,
    ref: "Shuttle",
  },
  status: {
    type: Number,
    default: 0,
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
        bookBy: String,
        step: {
          type: Number,
          default: 0,
        },
        passenger: {
          name: {
            type: String,
          },
          nationality: {
            type: String,
          },
          GID: {
            type: String,
          },
        },
      },
    ],
    right: [
      {
        seat: String,
        reserve: Boolean,
        bookBy: String,
        step: {
          type: Number,
          default: 0,
        },
        passenger: {
          name: {
            type: String,
          },
          dob: {
            type: String,
          },
          nationality: {
            type: String,
          },
          GID: {
            type: String,
          },
        },
      },
    ],
  },
  fee: {
    type: Schema.Types.ObjectId,
    ref: "Fee",
  },
});

const TempBookingModel = model("TempBooking", TempBookingSchema);
export default TempBookingModel;
