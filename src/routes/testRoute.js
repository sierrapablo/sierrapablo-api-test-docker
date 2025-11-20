import { Router } from "express";
import testController from "../controllers/testController";

const router = Router();

const { getTest } = testController;

router.get("/test", getTest);

export default router;
