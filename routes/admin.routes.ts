import express from "express";
import { authenticate } from "../middleware/authenticate";
import { updateUser } from "../controllers/user.controller";

const usersRouter = express.Router();

usersRouter.post("/update", authenticate, updateUser);

export default usersRouter;