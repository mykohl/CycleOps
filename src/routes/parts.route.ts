import express from "express";
import PartsController from "../controllers/parts.controller";

const router = express.Router();

router.post("/parts/create", PartsController.addPart);
router.post("/parts/create/hub", PartsController.addHub);
router.post("/parts/create/maker", PartsController.addMaker);

export default router;