import { Router } from "express";
import { readDirectory } from "../controllers/directory.controller.js";

export const readRouter = Router();

readRouter.get("/readDirectory", readDirectory);