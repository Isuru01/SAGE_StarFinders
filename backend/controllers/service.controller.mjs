import Service from "../models/service.model.mjs";
import Fee from "../models/fee.model.mjs";

const createService = async (req, res, next) => {
  const { fee, ...service } = req.body;
  try {
    const { _id } = await Fee.create(fee);
    const result = await Service.create({ ...service, fee: _id });

    res.status(200).json({ message: "Service created" });
  } catch (error) {
    next(error);
  }
};

const getService = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getAllService = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export { createService, getService, getAllService, updateService };
