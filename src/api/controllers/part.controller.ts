import { Request, Response } from "express";
import { CreatePart, CreateHub } from '../services/part.service';
import { PartUpsertModel, HubUpsertModel } from "../models/part.model" 

export async function AddPart(req: Request, res: Response) {
    try {
        const modelNewPart: PartUpsertModel = req.body;
        const newPart = await CreatePart(modelNewPart);
        res.status(200).json (newPart);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

export async function AddHub(req: Request, res: Response) {
    try {
        const modelNewHub: HubUpsertModel = req.body;
        const newHub = await CreateHub(modelNewHub);
        res.status(200).json (newHub);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}
