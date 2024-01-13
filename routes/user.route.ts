import express from "express";
import { authenticate } from "../middleware/authenticate";
import { UpdateUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/update", UpdateUser);

export default userRouter;