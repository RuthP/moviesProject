import {Component, OnInit, Input}from '@angular/core';
import {Movie} from '../movie';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  movieId: string;

  constructor(
    private movieService: MovieService,
    public modal: NgbActiveModal
  ) {

    console.log('2. on init');
    this.movieService.movieIdEmmiter.subscribe(movieId => {
      this.movieId = movieId;

      console.log('subscripcion');
    });
  }

  ngOnInit() {
    this.getMovieById(this.movieId);
  }

  getMovieById(id: string) : void {
    this.movieService.getMovie(id)
      .subscribe(movie => {this.movie = movie; console.log('5. '+this.movie);});

  }



}
