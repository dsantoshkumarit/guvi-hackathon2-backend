import { TheaterModel } from "../../models/theatermodel.js";
import express from "express";

const theaterRoutes = express.Router();

theaterRoutes.route("/add").post(async (req, res, next) => {
  const showstimings = {
    1: "09:00 AM",
    2: "12:30 PM",
    3: "03:00 PM",
    4: "06:00 PM",
    5: "09:00 PM",
  };

  let req_shows = [1, 2, 3, 4, 5].map((value) => {
    if (req.body.shows[value]) {
      let obj = {};
      obj["time"] = showstimings[value];
      obj["seats"] = "100";
      obj["movieid"] = "";
      return obj;
    } else {
      let obj = {};
      obj["time"] = showstimings[value];
      obj["seats"] = "NA";
      obj["movieid"] = "NA";
      return obj;
    }
  });

  const theater = new TheaterModel({
    theatername: req.body.theatername,
    shows: req_shows,
  });

  try {
    const newTheater = await theater.save();
    res.send(newTheater);
  } catch (err) {
    res.send(err);
  }
});
theaterRoutes.route("/modify").post(async (req, res, next) => {
  res.json(req.body);
});
theaterRoutes.route("/delete").post(async (req, res, next) => {
  res.json(req.body);
});

export default theaterRoutes;
