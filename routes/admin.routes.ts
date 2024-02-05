import express from "express";
import { authenticate } from "../middleware/authenticate";
import { updateUser, getUsers } from "../controllers/admin-controllers/user-admin.controller";
import { 
    getPartClassifications, 
    getPartTypes, 
    addPartClassMember,
    removePartClassMember,
    reorderPartClass
} from "../controllers/admin-controllers/parts-admin.controller";

const adminRouter = express.Router();

adminRouter.post("/users/update", authenticate, updateUser);
adminRouter.get("/users", authenticate, getUsers);

adminRouter.get("/parts/classes", authenticate, getPartClassifications);
adminRouter.get("/parts/types", authenticate, getPartTypes);
adminRouter.post("/parts/classes/add-member", authenticate, addPartClassMember);
adminRouter.post("/parts/classes/remove-member", authenticate, removePartClassMember);
adminRouter.post("/parts/classes/reorder", authenticate, reorderPartClass);

export default adminRouter;