import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const PlannetSchema = new Schema({
  key: {
    type: String,
  },
  pid: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

PlannetSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }
  next();
});

const PlannetModel = model("Plannet", PlannetSchema);
export default PlannetModel;
