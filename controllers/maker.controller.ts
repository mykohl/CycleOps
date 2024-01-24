import { Request, Response } from "express";
import { ProducerDto } from "../data/models/producer.model";
import { ProducerService } from "../services/producer.service";

export async function UpdateMaker(req: Request, res: Response) {
    try {
        const modelNewMaker: ProducerDto = req.body;
        const newMaker = await ProducerService.updateMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

export async function GetOneMaker(req: Request, res: Response) {
    try {
        const makerKey = req.params.key;
        const maker = await ProducerService.findMaker(makerKey);
        res.status(200).json(maker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}

export async function GetAllMakers(req: Request, res: Response) {
    try {
        const makers = await ProducerService.getAllMakers();
        res.status(200).json(makers);
    } catch(e) {
        res.status(500).json({ error: e });
    }
}