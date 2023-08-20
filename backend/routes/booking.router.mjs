import { Router } from "express";
import { updatePassenger } from "../controllers/booking.controller.mjs";

const router = Router();

router.route("/passenger").put(updatePassenger);

export default router;
