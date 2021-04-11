import Express from "express";
import cors from "cors";
import mongoose from "mongoose";

import theaterRoutes from "./routes/admin/theater.js";
import movieRoutes from "./routes/admin/movie.js";

const app = Express();

const url = process.env.MONGODB_URI || "mongodb://localhost/RecipeData";
const port = process.env.PORT || 3200;

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("Mongo DB connected");
});

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/admin/theater", theaterRoutes);
app.use("/admin/movie", movieRoutes);

app.listen(port, () => console.log(`Listening at ${port}`));
