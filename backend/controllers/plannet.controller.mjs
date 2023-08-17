import Plannet from "../models/plannet.model.mjs";

const createPlannet = async (req, res, next) => {
  console.log(req.body);
  try {
    const { plannet } = req.body;
    const { _id } = await Plannet.create(plannet);

    res.status(200).json({ message: `${plannet.name} is created` });
  } catch (error) {
    next(error);
  }
};

export { createPlannet };
