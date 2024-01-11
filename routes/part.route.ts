import express from "express";
import { UpdatePart, UpdateHub } from "../controllers/part.controller";

const partsRouter = express.Router();

partsRouter.post("/update", UpdatePart);
partsRouter.post("/update/hub", UpdateHub);

export default partsRouter;