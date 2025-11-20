import { Router } from "express";
const router = Router();
import testController from "../controllers/testController";
const { getTest } = testController;

router.get("/test", getTest);

export default router;
