export interface Movie {
  moveiId: number;
  imdbId: string;
  title: string;
  overview: string;
  productionCompanies: string;
  releaseDate: string;
  language: string;
  genres: string;
  status: string;
  runtime: number;
  budget: number;
  revenue: number;
}

export interface Rating {
  ratingId: number; 
  userId: number;
  movieId: number;
  rating: number; 
  timestamp: number; 
}