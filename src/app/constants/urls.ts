import {environment} from "../../environments/environment";

export const urls = {
  moviesUrl: `${environment.API}/discover/movie`,
  ImageOriginalUrl: `https://image.tmdb.org/t/p/original/`,
  ImageLogoUrl: 'https://image.tmdb.org/t/p/w500/',
  movieById: `${environment.API}/movie`,
  genreList: `${environment.API}/genre/movie/list`

}
