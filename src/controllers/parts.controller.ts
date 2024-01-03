import { Request, Response } from "express";
import { Maker, Part, PartHub } from "@prisma/client";
import { svcAddMaker, svcAddPart, svcAddHub } from '../services/parts.service';

async function addMaker(req: Request, res: Response) {
    try {
        const modelNewMaker: Maker = req.body;
        const newMaker = await svcAddMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

async function addPart(req: Request, res: Response) {
    try {
        const modelNewPart: Part = req.body;
        const newPart = await svcAddPart (modelNewPart);
        res.status(200).json (newPart);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

async function addHub(req: Request, res: Response) {
    try {
        const modelNewHub: PartHub = req.body;
        const newHub = await svcAddHub (modelNewHub);
        res.status(200).json (newHub);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

export default {
    addMaker,
    addPart,
    addHub
};