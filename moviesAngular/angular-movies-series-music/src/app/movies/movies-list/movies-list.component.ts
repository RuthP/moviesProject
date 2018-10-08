import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MOVIES} from '../mock-movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movie : Movie = {
    idMovie: '5b96edcf4087542e5c9de569',
    name: 'The ring'
  };

  movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}
