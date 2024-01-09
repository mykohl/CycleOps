import express from "express";
import { UpdateMaker, GetOneMaker } from "../controllers/maker.controller";

const makerRouter = express.Router();

makerRouter.post("/update", UpdateMaker);
makerRouter.get("/:key", GetOneMaker);

export default makerRouter;