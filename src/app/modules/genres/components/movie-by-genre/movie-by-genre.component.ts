import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-by-genre',
  templateUrl: './movie-by-genre.component.html',
  styleUrls: ['./movie-by-genre.component.css']
})
export class MovieByGenreComponent implements OnInit {
  @Input()
  movie: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
