import { Sequelize, DataTypes, Model } from "sequelize";
import path from "path";
import Rating from "./rating.model";

const dbPath = path.resolve(__dirname, "../db/movies.db");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

class Movie extends Model {}

Movie.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imdbId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productionCompanies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const raw = this.getDataValue("genres");
        if (!raw) return "";
        const object = JSON.parse(raw);
        const genres = object.map((genre: any) => genre.name);
        return genres.join(", ");
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get() {
        const raw = this.getDataValue("budget");
        if (!raw) return "";
        const number = Number(raw);
        const formattedAmount = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(number);

        return formattedAmount;
      },
    },
    revenue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Movie",
    tableName: "movies",
    timestamps: false,
  }
);

export default Movie;
