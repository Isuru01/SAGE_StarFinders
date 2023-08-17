import { Router } from "express";
import {
  getAllService,
  createService,
  getService,
  updateService,
} from "../controllers/service.controller.mjs";

const router = Router();

router.route("/").get(getAllService).post(createService);
router.route("/:id").get(getService).put(updateService);

export default router;
