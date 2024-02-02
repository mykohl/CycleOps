import { Request, Response } from "express";
import { ClassificationService } from "../services/classification.service";

export async function getPartClassifications(req: Request, res: Response) {
    try {
        const partClassificationsFetch = await ClassificationService.getPartClassifications();
        res.status(200).json(partClassificationsFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}