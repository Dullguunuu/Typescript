import { create, getAll } from "../controllers/theater.controller";
import { Router } from "express";

const route = Router();

route.get("/theater", getAll).post("/theater", create);

export default route;