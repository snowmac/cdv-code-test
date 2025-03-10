import { getAllByOffsetAndLimit } from "./movie.service";
import MovieModel from "../models/movie.model";

jest.mock("../models/movie.model");

describe("getAllByOffsetAndLimit", () => {
  const mockMovies = [
    {
      imdbId: "tt0111161",
      title: "The Shawshank Redemption",
      genres: ["Drama"],
      releaseDate: "1994-09-23",
      budget: 25000000,
    },
    {
      imdbId: "tt0068646",
      title: "The Godfather",
      genres: ["Crime", "Drama"],
      releaseDate: "1972-03-24",
      budget: 6000000,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return movies with the specified offset and limit", async () => {
    (MovieModel.findAll as jest.Mock).mockResolvedValue(mockMovies);

    const offset = 0;
    const limit = 2;
    const result = await getAllByOffsetAndLimit(offset, limit);

    expect(MovieModel.findAll).toHaveBeenCalledWith({
      offset,
      limit,
      attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
    });
    expect(result).toEqual(mockMovies);
  });

  it("should handle empty result", async () => {
    (MovieModel.findAll as jest.Mock).mockResolvedValue([]);

    const offset = 0;
    const limit = 2;
    const result = await getAllByOffsetAndLimit(offset, limit);

    expect(MovieModel.findAll).toHaveBeenCalledWith({
      offset,
      limit,
      attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
    });
    expect(result).toEqual([]);
  });

  it("should handle errors", async () => {
    const errorMessage = "Database error";
    (MovieModel.findAll as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    const offset = 0;
    const limit = 2;

    await expect(getAllByOffsetAndLimit(offset, limit)).rejects.toThrow(
      errorMessage
    );
  });
});
