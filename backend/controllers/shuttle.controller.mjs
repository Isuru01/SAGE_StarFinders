import Shuttle from "../models/shuttle.model.mjs";

const createShuttle = async (req, res, next) => {
  try {
    await Shuttle.create();
  } catch (error) {
    next(error);
  }
};

const getShuttle = async (req, res, next) => {
  try {
    //test commit2
  } catch (error) {
    next(error);
  }
};

const getAllShuttle = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateShuttle = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export { createShuttle, getShuttle, getAllShuttle, updateShuttle };
