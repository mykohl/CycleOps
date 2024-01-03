import { Request, Response } from "express";
import { prisma } from "../server";
import { Maker } from "../models/model.maker";

const { svcAddMaker } = require('../services/parts.service')

const addMaker = async (req: Request, res: Response) => {
    try {
        const modelNewMaker: Maker = req.body;
        const newMaker = await svcAddMaker(modelNewMaker);
        res.status(200).json(newMaker);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const addPart = async (req: Request, res: Response) => {
};

export default {
    addMaker,
    addPart
};