import express from "express";
import bodyParser from "body-parser";
import movieRouter from "./routes/movie.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
