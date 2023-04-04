import { Date, model, Schema, Types } from "mongoose";

interface IComment {
    name: string;
    email: string;
    // movie_id: 
    text: string;
    // date: Date;
}


const commentSchema = new Schema<IComment>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        text: { type: String, required: true },
    });

const Comment = model<IComment>("comments", commentSchema);

export default Comment;
