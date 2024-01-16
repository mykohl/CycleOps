import express from "express";
import { UpdateMaker, GetOneMaker, GetAllMakers } from "../controllers/maker.controller";
import { authenticate } from "../middleware/authenticate";

const makerRouter = express.Router();

makerRouter.post("/update", authenticate, UpdateMaker);
makerRouter.get("/:key", authenticate, GetOneMaker);
makerRouter.get("/", GetAllMakers)

export default makerRouter;