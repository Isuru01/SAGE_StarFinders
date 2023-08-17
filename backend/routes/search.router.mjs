import { Router } from "express";
import {
  searchShuttle,
  getAllPlannet,
} from "../controllers/search.controller.mjs";

const router = Router();

router.route("/").get(searchShuttle);
router.route("/plannet").get(getAllPlannet);

export default router;
