import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MainTokenInterceptor} from "../../services/main-token.interceptor";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainTokenInterceptor,
      multi: true
    }
  ]
})
export class MoviesModule { }
