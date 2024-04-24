import { Router } from "express";
import { downloadAudioController } from "../controllers/download.controller.js";

export const downloadRouter = Router();

downloadRouter.post("/download", downloadAudioController);