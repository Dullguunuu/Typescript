import Theater from "../models/theater.model";
import { Request, Response } from "express";
import { request } from "http";

const create = (req: Request, res: Response) => {
    res.json({ status: true });
}

const getAll = (req: Request, res: Response) => {
    res.json({ status: true });
}

export { create, getAll };
