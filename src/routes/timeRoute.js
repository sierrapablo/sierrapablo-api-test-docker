import { Router } from "express";
import { getTime } from "../controllers/timeController.js";

const router = Router();

router.get("/time", getTime);

export default router;
