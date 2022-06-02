import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../../interfaces/genre.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: Genre;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  genreList() {
    this.router.navigate([`genre/${this.genre.id}`])
  }
}
