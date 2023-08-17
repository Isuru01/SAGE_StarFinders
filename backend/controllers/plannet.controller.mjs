import Plannet from "../models/plannet.model.mjs";

const createPlannet = async (res, req, next) => {
  const { plannet } = req.body;

  try {
    const { _id } = await Plannet.create(plannet);

    res.status(200).json({ message: `${plannet.name} is created` });
  } catch (error) {
    next(error);
  }
};

export { createPlannet };
