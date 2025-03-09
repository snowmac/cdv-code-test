import { Router, Request, Response } from "express";
import { getMoviesByPage } from "../services/movie.service";

const router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 50;
    const offset = (page - 1) * limit;

    const movies = await getMoviesByPage(offset, limit);
    const formattedMovies = movies.map((movie: any) => {
      return {
        imdbId: movie.imdbId,
        title: movie.title,
        genres: movie.genres,
        releaseDate: movie.releaseDate,
        budget: movie.budget,
      };
    });

    res.json(formattedMovies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
