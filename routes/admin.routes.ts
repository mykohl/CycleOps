import express from "express";
import { authenticate } from "../middleware/authenticate";
import { updateUser, getUsers } from "../controllers/user.controller";

const usersRouter = express.Router();

usersRouter.post("/update", authenticate, updateUser);
usersRouter.get("/", authenticate, getUsers);

export default usersRouter;