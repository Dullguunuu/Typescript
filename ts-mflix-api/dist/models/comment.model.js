"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true },
});
const Comment = (0, mongoose_1.model)("comments", commentSchema);
exports.default = Comment;
