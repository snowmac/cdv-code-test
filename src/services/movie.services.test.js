"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_service_1 = require("./movie.service");
const movie_model_1 = __importDefault(require("../models/movie.model"));
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
    it("should return movies with the specified offset and limit", () => __awaiter(void 0, void 0, void 0, function* () {
        movie_model_1.default.findAll.mockResolvedValue(mockMovies);
        const offset = 0;
        const limit = 2;
        const result = yield (0, movie_service_1.getAllByOffsetAndLimit)(offset, limit);
        expect(movie_model_1.default.findAll).toHaveBeenCalledWith({
            offset,
            limit,
            attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
        });
        expect(result).toEqual(mockMovies);
    }));
    it("should handle empty result", () => __awaiter(void 0, void 0, void 0, function* () {
        movie_model_1.default.findAll.mockResolvedValue([]);
        const offset = 0;
        const limit = 2;
        const result = yield (0, movie_service_1.getAllByOffsetAndLimit)(offset, limit);
        expect(movie_model_1.default.findAll).toHaveBeenCalledWith({
            offset,
            limit,
            attributes: ["imdbId", "title", "genres", "releaseDate", "budget"],
        });
        expect(result).toEqual([]);
    }));
    it("should handle errors", () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = "Database error";
        movie_model_1.default.findAll.mockRejectedValue(new Error(errorMessage));
        const offset = 0;
        const limit = 2;
        yield expect((0, movie_service_1.getAllByOffsetAndLimit)(offset, limit)).rejects.toThrow(errorMessage);
    }));
});
