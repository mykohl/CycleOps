import { Request, Response } from "express";
import { ClassificationService } from "../services/classification.service";

export async function getPartClassifications(req: Request, res: Response) {
    try {
        const partClassesFetch = await ClassificationService.getPartClassifications();
        res.status(200).json(partClassesFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}

export async function getPartTypes(req: Request, res: Response) {
    try {
        const partTypesFetch = await ClassificationService.getPartTypes();
        res.status(200).json(partTypesFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }    
}