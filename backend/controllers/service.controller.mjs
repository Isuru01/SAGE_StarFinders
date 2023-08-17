import Service from "../models/service.model.mjs";

const createService = async (req, res, next) => {
  try {
    await Service.create();
    res.status(200).json({ message: `service  is created` });
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
