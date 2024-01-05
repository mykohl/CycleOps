"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parts_service_1 = __importDefault(require("../services/parts.service"));
function AddMaker(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modelNewMaker = req.body;
            const newMaker = yield parts_service_1.default.CreateMaker(modelNewMaker);
            res.status(200).json(newMaker);
        }
        catch (e) {
            res.status(500).json({ error: e });
        }
    });
}
function AddPart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modelNewPart = req.body;
            const newPart = yield parts_service_1.default.CreatePart(modelNewPart);
            res.status(200).json(newPart);
        }
        catch (e) {
            res.status(500).json({ error: e });
        }
    });
}
function AddHub(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modelNewHub = req.body;
            const newHub = yield parts_service_1.default.CreateHub(modelNewHub);
            res.status(200).json(newHub);
        }
        catch (e) {
            res.status(500).json({ error: e });
        }
    });
}
exports.default = {
    AddMaker,
    AddPart,
    AddHub
};
