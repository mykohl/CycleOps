"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parts_controller_1 = __importDefault(require("../controllers/parts.controller"));
const router = express_1.default.Router();
router.post("/parts/create", parts_controller_1.default.AddPart);
router.post("/parts/create/hub", parts_controller_1.default.AddHub);
router.post("/parts/create/maker", parts_controller_1.default.AddMaker);
exports.default = router;
