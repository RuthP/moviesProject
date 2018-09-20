import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MoviesComponent, MovieComponent, AddMovieComponent, EditMovieComponent, MoviesListComponent, MovieDetailsComponent, MovieSearchComponent],
  declarations: [MoviesComponent, MovieComponent, AddMovieComponent, EditMovieComponent, MoviesListComponent, MovieDetailsComponent, MovieSearchComponent]
})
export class MoviesModule { }
