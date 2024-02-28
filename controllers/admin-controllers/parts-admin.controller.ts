import { Request, Response } from "express";
import { PartsAdminService } from "../../services/parts-admin.service";
import { PartClassDto, PartClassMembershipDto } from "../../data/models/model.dto";
import { error } from "console";

export async function getPartClassifications(req: Request, res: Response) {
    try {
        const partClassesFetch = await PartsAdminService.getPartClasses();
        res.status(200).json(partClassesFetch);
    } catch(e) {
        res.status(500).json ({ error: e });
    }
}

export async function getPartTypes(req: Request, res: Response) {
    try {
        const partTypesFetch = await PartsAdminService.getPartTypes();
        res.status(200).json(partTypesFetch);
    } catch(e) {
        res.status(500).json({ error: e });
    }
}

export async function updatePartClass(req: Request, res: Response) {
    try {
        const partClassDto: PartClassDto = req.body;
        let result = null;
        if(partClassDto.id && partClassDto.id > 0) {
            result = await PartsAdminService.updatePartClass(partClassDto);
        } else {
            result = await PartsAdminService.addPartClass(partClassDto);
        }
        res.status(200).json(result);
    } catch(e) {
        res.status(500).json ({ error: e });
    }
}

export async function addPartClassMember(req: Request, res: Response) {
    try {
        const partClassMembershipDto: PartClassMembershipDto = req.body;
        if(partClassMembershipDto && partClassMembershipDto.partTypeId && partClassMembershipDto.partClassId) {
            const result = await PartsAdminService.addPartClassMember(partClassMembershipDto);
            res.status(200).json(result);
        } else {
            res.status(200).json(null);
        }
    } catch(e) {
        res.status(500).json({ error: e });
    }
}

export async function removePartClassMember(req: Request, res: Response) {
    try {
        const partClassMembershipDto: PartClassMembershipDto = req.body;
        if(partClassMembershipDto && partClassMembershipDto.partTypeId && partClassMembershipDto.partClassId) {
            const result = await PartsAdminService.removePartClassMember(partClassMembershipDto);
            res.status(200).json(result);
        } else {
            res.status(200).json(null);
        }
    } catch(e) {
        res.status(500).json({ error: e });
    }
}

export async function reorderPartClass(req: Request, res: Response) {
    try {
        const reorderParams: { partClassId: number, order: number, previousOrder: number } = req.body;
        if(reorderParams) {
            const result = await PartsAdminService.reorderPartClass(reorderParams);
            res.status(200).json(result);
        } else {
            res.status(200).json(null);
        }
    } catch(e) {
        res.status(500).json({ error: e });
    }
}