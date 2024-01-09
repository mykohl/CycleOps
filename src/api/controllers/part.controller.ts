import { Request, Response } from "express";
import { PartService } from '../services/part.service';
import { PartDto, HubDto } from "../../data/models/part.model" 

export async function UpdatePart(req: Request, res: Response) {
    try {
        const modelNewPart: PartDto = req.body;
        const newPart = await PartService.UpdatePart(modelNewPart);
        res.status(200).json (newPart);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}

export async function UpdateHub(req: Request, res: Response) {
    try {
        const modelNewHub: HubDto = req.body;
        const newHub = await PartService.UpdateHub(modelNewHub);
        res.status(200).json (newHub);
    } catch (e) {
        res.status(500).json ( { error: e } );
    }
}
