import express from "express";
import { AddPart, AddHub } from "../controllers/parts.controller";

const partsRouter = express.Router();

partsRouter.post("/create", AddPart);
partsRouter.post("/create/hub", AddHub);


export default partsRouter;