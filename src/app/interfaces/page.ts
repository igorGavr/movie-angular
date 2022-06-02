import {Movie} from "./movie.interface";

export interface Page{
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}
