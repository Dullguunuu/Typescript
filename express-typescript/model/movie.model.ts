import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface IMovie {
  title: { type: String; required: true };
  rating: { type: Number; required: true };
  directors: { type: [String]; required: true };
  // genre: { type: Types.ObjectId; ref: "" };
}

const movieSchema = new Schema<IMovie>({});

const Movie = model<IMovie>("movies", movieSchema);

export default Movie;
