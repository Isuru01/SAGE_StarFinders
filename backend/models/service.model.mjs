import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const ServiceSchema = new Schema({
  key: {
    type: String,
  },
  depTime: {
    type: String,
    required: true,
  },
  arrTime: {
    type: String,
    required: true,
  },
  seats: {},
  depPort: {
    type: String,
    required: true,
  },
  arriPort: {
    type: String,
    required: true,
  },

  fee: {},
});

ServiceSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const ServiceModel = model("Service", ServiceSchema);
export default ServiceModel;
