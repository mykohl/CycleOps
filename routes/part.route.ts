import express from "express";
import { UpdatePart, UpdateHub } from "../controllers/part.controller";
import { authenticate } from "../middleware/authenticate";

const partsRouter = express.Router();

partsRouter.post("/update", authenticate, UpdatePart);
partsRouter.post("/update/hub", authenticate, UpdateHub);

export default partsRouter;