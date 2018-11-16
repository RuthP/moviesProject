import {Injectable, EventEmitter} from '@angular/core';
import {Movie} from './movie';
import {MOVIES} from './mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Output} from '@angular/core';
import {tap} from "rxjs/internal/operators";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'http://localhost:9091/movies';

  @Output() movieIdEmmiter: EventEmitter<string> = new EventEmitter();


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMovies(): Observable<Movie[]>  {
    //noinspection TypeScriptValidateTypes
    return this.http.get<Movie[]>(this.moviesUrl, httpOptions)
      .pipe(
        tap(movies => this.log('fetched movies'))//,
        //catchError(this.handleError('getMovies',[]))
      );
    /*this.messageService.add('MovieService: fetched movies');
    return of (MOVIES);*/
  }

  getMovie(id: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    console.log('4. '+url);
    return this.http.get<Movie>(url,httpOptions).pipe(
      tap(movie_=> this.log(`fetched movie id=${id}`))//,
      //catchError(this.handleError<Movie>('getMovie id=${id}'))
    );


  }

  setMovieId(id: string) {
    console.log('3. '+id);
    this.movieIdEmmiter.emit(id);
  }


  updateMovie(movie: Movie): Observable<any> {
      return this.http.put(this.moviesUrl,movie,httpOptions).pipe(
        tap(_ => this.log(`updated movie id=${movie.idMovie}`))//,
        //catchError(this.handleError<any>('updateMovie'))
      );
  }

  addMovie(movie: Movie): Observable<Movie> {
      return this.http.post(this.moviesUrl,movie,httpOptions).pipe(
        tap((movie: Movie) => this.log(`added movie w/ id=$movie.idMovie}`))//,
        //catchError(this.handleError<Movie>('addMovie'))
      );
  }


  private log (message: string){
      this.messageService.add(`MovieService: ${message}`)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
