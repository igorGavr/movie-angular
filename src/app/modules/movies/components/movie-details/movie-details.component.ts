import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../../../constants/urls";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  imageOriginal: string;
  imagePreview: string;
  movieDetails: Movie;
  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(res => {
      this.movieDetails = ['res']
      this.imageOriginal = `${urls.ImageOriginalUrl}${this.movieDetails.backdrop_path}`;
      this.imagePreview = `${urls.ImageLogoUrl}${this.movieDetails.poster_path}`
    })
  }

  ngOnInit(): void {
  }

}
