import express from "express";
import { UpdatePart, UpdateHub } from "../controllers/part.controller";

const partsRouter = express.Router();

partsRouter.post("/create", UpdatePart);
partsRouter.post("/create/hub", UpdateHub);

export default partsRouter;