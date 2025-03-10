import MovieModel from "../models/movie.model";
import RatingModel from "../models/rating.model";

export const getAllByOffsetAndLimit = async (offset: number, limit: number) => {
  const movies = await MovieModel.findAll({
    offset,
    limit,
    attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
  });

  return movies;
};

export const getById = async (id: number) => {
  const movie = await MovieModel.findByPk(id);
  if (!movie) throw new Error("Movie not found");

  const ratings = await RatingModel.findAll({
    where: { movieId: id },
  });

  const sum = ratings.reduce((acc, item) => acc + item.dataValues.rating, 0);
  let avg = sum / ratings?.length || 0;

  return {
    ...movie.dataValues,
    averageRating: avg,
  };
};
