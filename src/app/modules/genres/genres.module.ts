import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MainTokenInterceptor} from "../../services/main-token.interceptor";
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import {GenresRoutingModule} from "./genres-routing.module";
import { MovieByGenreComponent } from './components/movie-by-genre/movie-by-genre.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MoviesByGenreComponent,
    MovieByGenreComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainTokenInterceptor,
      multi: true
    }
  ]
})
export class GenresModule { }
