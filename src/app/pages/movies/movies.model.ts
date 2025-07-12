export interface MoviesResponse {
  metaData: MoviesMetaData;
  data: MoviesModel[];
}
export interface MoviesModel {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  generes: string[];
  images: string[];
}

export interface MoviesMetaData {
  current_page: string;
  per_page: number;
  page_count: number;
  total_count: number;
}

