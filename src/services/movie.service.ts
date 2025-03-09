import MovieModel from "../models/movie.model";

export const getAllMovies = () => {
  return MovieModel.findAll();
};

export const getMoviesByPage = async (
  offset: number,
  limit: number
): Promise<any> => {
  const allByPage = await MovieModel.findAll({
    offset,
    limit,
  });
  return allByPage;
};
