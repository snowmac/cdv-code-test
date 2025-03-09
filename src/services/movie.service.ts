import sqlite3 from "sqlite3";
import { Movie } from "../types";
import util from "util";
import path from "path";

const dbPath = path.resolve(__dirname, "../db/movies.db");

const dbInt = new sqlite3.Database(dbPath);
const dbAll = util.promisify(dbInt.all);

export const getAllMovies = (): Promise<Movie[]> => {
  return dbAll("SELECT * FROM movies") as Promise<Movie[]>;
};

export const getMoviesByPage = async (
  offset: number,
  limit: number
): Promise<any> => {
  console.log("into try the movies stuff");
  try {
    dbInt.run(
      `SELECT * FROM movies LIMIT ${limit} OFFSET ${offset}`,
      (err: any, rows: any) => {
        console.log("got shit");
        if (err) {
          console.log(err);
          return [];
        }
        console.log(rows);
        return rows;
      }
    );

    const movies = await dbAll(
      `SELECT * FROM movies LIMIT ${limit} OFFSET ${offset}`
    );
    return movies;
  } catch (error) {
    console.log(error);
    return [];
  }
};
