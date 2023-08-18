import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const PassengerSchema = new Schema({
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
});

const ServiceSchema = new Schema({
  key: {
    type: String,
  },
  carrier: {
    type: String,
  },
  day: {
    type: String,
  },
  depTime: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  arrTime: {
    type: String,
    required: true,
  },
  seats: {
    left: [
      {
        seat: String,
        reserve: Boolean,
        passenger: PassengerSchema,
      },
    ],
    right: [
      {
        seat: String,
        reserve: Boolean,
        passenger: PassengerSchema,
      },
    ],
  },
  depPort: {
    type: String,
    required: true,
  },
  arrPort: {
    type: String,
    required: true,
  },
  fee: {
    type: Schema.Types.ObjectId,
    ref: "Fee",
  },
});

ServiceSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }

  // Calculate the duration
  const depTime = dayjs(this.depTime);
  const arrTime = dayjs(this.arrTime);
  const duration = arrTime.diff(depTime);

  // Format the duration as 'Days Hours Minutes'
  this.duration = dayjs
    .duration(duration)
    .format("D [Days] H [Hours] m [Minutes]");

  // Pre-save values for the 'left' and 'right' seat arrays
  this.seats.left = [
    { seat: "1LW", reserve: false, passenger: {} },
    { seat: "1LA", reserve: false },
    { seat: "2LW", reserve: false },
    { seat: "2LA", reserve: false },
    { seat: "3LW", reserve: false },
    { seat: "3LA", reserve: false },
    { seat: "4LW", reserve: false },
    { seat: "4LA", reserve: false },
    { seat: "5LW", reserve: false },
    { seat: "5LA", reserve: false },
    { seat: "6LW", reserve: false },
    { seat: "6LA", reserve: false },
    { seat: "7LW", reserve: false },
    { seat: "7LA", reserve: false },
    { seat: "8LW", reserve: false },
    { seat: "9LA", reserve: false },
    { seat: "10LW", reserve: false },
    { seat: "10LA", reserve: false },
  ];

  this.seats.right = [
    { seat: "1RW", reserve: false },
    { seat: "1RA", reserve: false },
    { seat: "2RW", reserve: false },
    { seat: "2RA", reserve: false },
    { seat: "3RW", reserve: false },
    { seat: "3RA", reserve: false },
    { seat: "4RW", reserve: false },
    { seat: "4RA", reserve: false },
    { seat: "5RW", reserve: false },
    { seat: "5RA", reserve: false },
    { seat: "6RW", reserve: false },
    { seat: "6RA", reserve: false },
    { seat: "7RW", reserve: false },
    { seat: "7RA", reserve: false },
    { seat: "8RW", reserve: false },
    { seat: "9RA", reserve: false },
    { seat: "10RW", reserve: false },
    { seat: "10RA", reserve: false },
  ];

  next();
});

const ServiceModel = model("Service", ServiceSchema);
export default ServiceModel;
