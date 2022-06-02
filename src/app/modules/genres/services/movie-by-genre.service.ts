import { Injectable } from '@angular/core';
import {urls} from "../../../constants/urls";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieByGenreService {
  private moviesUrl = urls.moviesUrl
  constructor(private httpClient: HttpClient) { }

  getMovieByGenre(id: number):Observable<any>{
    return this.httpClient.get<any>(`${this.moviesUrl}?with_genres=${id}`)
  }
}
