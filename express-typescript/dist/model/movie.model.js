"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({});
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
