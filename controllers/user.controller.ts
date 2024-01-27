import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserDto } from "../data/models/model.dto";

export async function UpdateUser(req: Request, res: Response) {
    try {
        const modelUpdateUser: UserDto = req.body;
        const updateUser = await UserService.UpdateUser(modelUpdateUser);
        res.status(200).json(updateUser);
    } catch(e) {
        res.status(500).json ( { error: e } );
    }
}