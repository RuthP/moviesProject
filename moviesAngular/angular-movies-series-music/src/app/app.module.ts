import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {MoviesModule} from './movies/movies.module';
import {MusicModule} from './music/music.module';
import {SeriesModule} from './series/series.module';
import {DiscsModule} from './discs/discs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    MusicModule,
    SeriesModule,
    DiscsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
