import { Request, Response } from "express";
import PartsService from '../services/parts.service';
import { MakerUpsertModel, PartUpsertModel, HubUpsertModel } from "../models/part.model" 

async function AddMaker(req: Request, res: Response) {
    try {
        const modelNewMaker: MakerUpsertModel = req.body;
        const newMaker = await PartsService.CreateMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

async function AddPart(req: Request, res: Response) {
    try {
        const modelNewPart: PartUpsertModel = req.body;
        const newPart = await PartsService.CreatePart(modelNewPart);
        res.status(200).json (newPart);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

async function AddHub(req: Request, res: Response) {
    try {
        const modelNewHub: HubUpsertModel = req.body;
        const newHub = await PartsService.CreateHub(modelNewHub);
        res.status(200).json (newHub);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

export default {
    AddMaker,
    AddPart,
    AddHub
};