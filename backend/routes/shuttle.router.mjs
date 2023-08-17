import { Router } from "express";
import {
  getAllShuttle,
  getShuttle,
  updateShuttle,
  createShuttle,
} from "../controllers/shuttle.controller.mjs";

const router = Router();

router.route("/").get(getAllShuttle).post(createShuttle);
router.route("/:id").get(getShuttle).put(updateShuttle);

export default router;
