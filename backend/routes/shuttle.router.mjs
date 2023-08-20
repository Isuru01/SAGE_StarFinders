import { Router } from "express";
import {
  getAllShuttle,
  getShuttle,
  updateShuttle,
  createShuttle,
  seatOnHold,
  getSeatMap,
} from "../controllers/shuttle.controller.mjs";

const router = Router();

router.route("/").get(getAllShuttle).post(createShuttle);
router.route("/seats/:id").get(getSeatMap);
router.route("/seats/:id").put(seatOnHold);
router.route("/:id").get(getShuttle).put(updateShuttle);

export default router;
