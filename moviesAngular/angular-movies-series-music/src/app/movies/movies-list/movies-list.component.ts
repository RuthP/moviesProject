import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

    /*movie : Movie = {
      idMovie: '5b96edcf4087542e5c9de569',
      name: 'The ring'
    };*/

    movies: Movie[];

    selectedMovie : Movie;

    constructor(private movieService: MovieService) { }

    ngOnInit() {
      this.getMovies();
    }

    onSelect(movie: Movie): void {
      this.selectedMovie = movie;
    }

    getMovies(): void {
      this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
    }


}
