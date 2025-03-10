import MovieModel from "../models/movie.model";

export const getAllByOffsetAndLimit = async (offset: number, limit: number) => {
  const movies = await MovieModel.findAll({
    offset,
    limit,
    attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
  });

  return movies;
};
