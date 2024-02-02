import express from "express";
import { authenticate } from "../middleware/authenticate";
import { updateUser, getUsers } from "../controllers/user.controller";
import { getPartClassifications, getPartTypes } from "../controllers/classification.controller";

const adminRouter = express.Router();

adminRouter.post("/users/update", authenticate, updateUser);
adminRouter.get("/users", authenticate, getUsers);
adminRouter.get("/classification", authenticate, getPartClassifications);
adminRouter.get("/classification/parts/types", authenticate, getPartTypes);

export default adminRouter;