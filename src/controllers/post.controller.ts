import { Request, Response } from "express";
import { prisma } from "../server";
import partService from "../part.service";

const createMaker = async (req: Request, res: Response) => {
    try {
        const { name, notes } = req.body;
        const newMaker = await prisma.maker.create({
            data: { name, notes },
        });
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const createPart = async (req: Request, res: Response) => {
};

export default {
    createMaker,
    createPart
};