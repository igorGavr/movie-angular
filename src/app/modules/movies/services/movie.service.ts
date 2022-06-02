import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants/urls";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = urls.moviesUrl;
  private movieById = urls.movieById

  constructor(private httpClient: HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get<any>(`${this.moviesUrl}`)
  }
  getMovie(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.movieById}/${id}`)
  }
}
