"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.resolve(__dirname, "../db/movies.db");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: dbPath,
});
class Movie extends sequelize_1.Model {
}
Movie.init({
    movieId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imdbId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    overview: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    productionCompanies: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    language: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    genres: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        get() {
            const raw = this.getDataValue("genres");
            if (!raw)
                return "";
            const object = JSON.parse(raw);
            const genres = object.map((genre) => genre.name);
            return genres.join(", ");
        },
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    runtime: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    budget: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        get() {
            const raw = this.getDataValue("budget");
            if (!raw)
                return "";
            const number = Number(raw);
            const formattedAmount = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(number);
            return formattedAmount;
        },
    },
    revenue: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Movie",
    tableName: "movies",
    timestamps: false,
});
exports.default = Movie;
