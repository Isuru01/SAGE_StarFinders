import Service from "../models/service.model.mjs";
import Shuttle from "../models/shuttle.model.mjs";

const searchShuttle = async (req, res, next) => {
  const { from, to, date } = req.params;

  try {
    const shuttle = await Shuttle.find({}, { _id: 0 });

    res.status(200).json(shuttle);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllPlannet = async (req, res, next) => {
  try {
  } catch (error) {}
};

export { searchShuttle, getAllPlannet };
