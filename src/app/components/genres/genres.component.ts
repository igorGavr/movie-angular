import { Component, OnInit } from '@angular/core';
import {Genre} from "../../interfaces/genre.interface";
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => {
      this.genres = value.genres
      console.log(value.genres)
    })
  }

}
