import { Router } from "express";
import { createPlannet } from "../controllers/plannet.controller.mjs";

const router = Router();

router.route("/").post(createPlannet);

export default router;
