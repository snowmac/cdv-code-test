import { Sequelize, DataTypes, Model } from "sequelize";
import path from "path";
import Movie from "./movie.model";

const dbPath = path.resolve(__dirname, "../db/ratings.db");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

class Rating extends Model {}

Rating.init(
  {
    ratingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rating",
    tableName: "ratings",
    timestamps: false,
  }
);

export default Rating;
