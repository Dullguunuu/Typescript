import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoute from "./routes/movie.routes";
import cors from "cors";

dotenv.config();

const uri: string = process.env.MONGO_DB_URI || "";

mongoose
  .connect(uri)
  .then(() => console.log("DB Success"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api", movieRoute);

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
