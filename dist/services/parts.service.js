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
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
function CreateMaker(maker) {
    return __awaiter(this, void 0, void 0, function* () {
        const newMaker = yield __1.prisma.maker.create({ data: maker });
        return newMaker;
    });
}
function CreatePart(part) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = part.makerUpsertModel) === null || _a === void 0 ? void 0 : _a.name) != undefined && ((_b = part.makerUpsertModel) === null || _b === void 0 ? void 0 : _b.name) != null && part.makerId == null) {
            const makerLookup = yield FindOneMaker((_c = part.makerUpsertModel) === null || _c === void 0 ? void 0 : _c.name);
            if (makerLookup != null)
                part.makerId = makerLookup.id;
        }
        const newPart = yield __1.prisma.part.create({ data: part });
        return newPart;
    });
}
function CreateHub(hub) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPart = yield CreatePart(hub.partUpsertModel);
        hub.partId = newPart.id;
        const newHub = yield __1.prisma.hub.create({ data: hub });
        return newHub;
    });
}
function FindOneMaker(makerName) {
    return __awaiter(this, void 0, void 0, function* () {
        const makerLookup = yield __1.prisma.maker.findFirst({ where: { name: makerName } });
        return makerLookup;
    });
}
exports.default = {
    CreateMaker,
    CreatePart,
    CreateHub,
    FindOneMaker
};
