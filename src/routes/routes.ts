import { Router } from "express";
import { generateSummary } from "../controllers/summary";
import apiKeyAuth from "../middlewares/apiKeyAuth";

const router = Router();

router.post("/resume", apiKeyAuth, generateSummary)

export default router
