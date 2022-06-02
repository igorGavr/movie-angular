import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

let routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'movie', pathMatch: 'full'},
      {path: 'movie', loadChildren: () => import('./modules/movies/movies.module').then(movie => movie.MoviesModule)},
      {path: 'genre', loadChildren: () => import('./modules/genres/genres.module').then(m => m.GenresModule)}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
