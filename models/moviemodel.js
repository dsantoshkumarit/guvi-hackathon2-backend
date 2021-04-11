import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
    unique: true,
  },
  movierating: { type: String, required: true },
  movielength: { type: String, required: true },
  movieimgurl: { type: String, required: true },
});

export const MovieModel = mongoose.model("movie", movieSchema);
