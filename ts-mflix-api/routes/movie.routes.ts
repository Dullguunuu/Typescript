import { create, getAll } from "../controllers/movie.controller";
import { Router } from "express";

const route = Router();

route.get("/movie", getAll).post("/movie", create);

export default route;