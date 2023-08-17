import { Router } from "express";
import {
  getAllPlanet,
  createPlanet,
  getPlanet,
  updatePlanet,
} from "../controllers/planet.controller.mjs";

const router = Router();

router.route("/").get(getAllPlanet).post(createPlanet);
router.route("/:id").get(getPlanet).put(updatePlanet);

export default router;
