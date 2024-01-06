import express from "express";
import { AddMaker, GetOneMaker } from "../controllers/maker.controller";

const makerRouter = express.Router();

makerRouter.post("/create", AddMaker);
makerRouter.get("/:name", GetOneMaker);

export default makerRouter;