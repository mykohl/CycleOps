import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserDto } from "../data/models/model.dto";

export async function getUsers(req: Request, res: Response) {
    try {
        const userFetch = await UserService.getUsers();
        res.status(200).json(userFetch);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const modelUpdateUser: UserDto = req.body;
        const updateUser = await UserService.updateUser(modelUpdateUser);
        res.status(200).json(updateUser);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}