import { Router } from "express";
import {
  getAllUser,
  getUser,
  updateUser,
  createUser,
} from "../controllers/user.controller.mjs";

const router = Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser).put(updateUser);

export default router;
