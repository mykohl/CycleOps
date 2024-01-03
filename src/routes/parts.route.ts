import express from "express";
import PartsController from "../controllers/parts.controller";

const router = express.Router();

router.post("/create/part", PartsController.addPart);
router.post("/create/maker", PartsController.addMaker)

export default router;