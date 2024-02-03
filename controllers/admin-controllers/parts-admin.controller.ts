import { Request, Response } from "express";
import { PartsAdminService } from "../../services/parts-admin.service";
import { PartClassMembershipDto } from "../../data/models/model.dto";
import { error } from "console";

export async function getPartClassifications(req: Request, res: Response) {
    try {
        const partClassesFetch = await PartsAdminService.getPartClasses();
        res.status(200).json(partClassesFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}

export async function getPartTypes(req: Request, res: Response) {
    try {
        const partTypesFetch = await PartsAdminService.getPartTypes();
        res.status(200).json(partTypesFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
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
        res.status(500).json ( { error: e } );
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
        res.status(500).json ( { error: e } );
    }
}