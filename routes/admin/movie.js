import { MovieModel } from "../../models/moviemodel.js";
import express from "express";

const movieRoutes = express.Router();

movieRoutes.route("/add").post(async (req, res, next) => {
  const movie = new MovieModel({
    moviename: req.body.moviename,
    movierating: req.body.movierating,
    movielength: req.body.movielength,
    movieimgurl: req.body.movieimgurl,
  });

  try {
    const newMovie = await movie.save();
    res.send(newMovie);
  } catch (err) {
    res.send(err);
  }
});

export default movieRoutes;
