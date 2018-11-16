import {Component, OnInit, ViewChild} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {ModalService} from '../../modal.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

    movies: Movie[];

    selectedMovie : Movie;

    constructor(
      private movieService: MovieService,
      private modalService: ModalService
    ) { }

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

    openDetails(name: string, id: string): void{
      console.log('1' + id);
      this.modalService.open(name);
      this.movieService.setMovieId(id);
    }

    getMovieById (id : string){
      return this.movieService.getMovie(id);
    }


}
