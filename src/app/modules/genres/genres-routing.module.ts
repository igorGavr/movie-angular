import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MoviesByGenreComponent} from "./components/movies-by-genre/movies-by-genre.component";

const routes: Routes = [
  {path: ':id', component: MoviesByGenreComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GenresRoutingModule { }
