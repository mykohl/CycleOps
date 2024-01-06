import express from "express";
import PartsController from "../controllers/parts.controller";

const router = express.Router();

router.post("/parts/create", PartsController.AddPart);
router.post("/parts/create/hub", PartsController.AddHub);
router.post("/parts/create/maker", PartsController.AddMaker);

export default router;