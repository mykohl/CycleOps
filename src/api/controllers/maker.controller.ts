import { Request, Response } from "express";
import { MakerDto } from "../../data/models/maker.model";
import { CreateMaker, FindOneMaker } from "../services/maker.service";

export async function AddMaker(req: Request, res: Response) {
    try {
        const modelNewMaker: MakerDto = req.body;
        const newMaker = await CreateMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

export async function GetOneMaker(req: Request, res: Response) {
    try {
        const makerName = req.params.name;
        const maker = await FindOneMaker(makerName);
        res.status(200).json(maker);
    }catch (e) {
        res.status(500).json({ error: e });
    }
}
