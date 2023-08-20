import express from "express";
import {
  createPayment,
  listenHook,
} from "../controllers/payment.controller.mjs";

const router = express.Router();

router
  .route("/webhook")
  .post(express.raw({ type: "application/json" }), listenHook);
router.route("/").post(createPayment);

export default router;
