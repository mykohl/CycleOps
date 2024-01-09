import { Request, Response } from "express";
import { MakerDto } from "../../data/models/maker.model";
import { MakerService } from "../services/maker.service";

export async function UpdateMaker(req: Request, res: Response) {
    try {
        const modelNewMaker: MakerDto = req.body;
        const newMaker = await MakerService.UpdateMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

export async function GetOneMaker(req: Request, res: Response) {
    try {
        const makerKey = req.params.key;
        const maker = await MakerService.GetOneMaker(makerKey);
        res.status(200).json(maker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}
