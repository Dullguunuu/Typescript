import { create, getAll } from "../controllers/comment.controller";
import { Router } from "express";

const route = Router();

route.get("/comment", getAll).post("/comment", create);

export default route;