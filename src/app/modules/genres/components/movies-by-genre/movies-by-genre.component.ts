import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../../interfaces/movie.interface";
import {Genre} from "../../../../interfaces/genre.interface";
import {MovieByGenreService} from "../../services/movie-by-genre.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: Movie[];
  genre: Genre;
  constructor(private moviesByGenreServices: MovieByGenreService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      let id = value['id']
      this.moviesByGenreServices.getMovieByGenre(id).subscribe(res => this.movies = res.results)
    })
  }

  ngOnInit(): void {
  }

}
