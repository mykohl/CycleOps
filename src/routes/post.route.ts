import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router();

router.post("/create/part", PostController.createPart);
router.post("/create/maker", PostController.createMaker)

export default router;