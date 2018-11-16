import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {MoviesModule} from './movies/movies.module';
import {MusicModule} from './music/music.module';
import {SeriesModule} from './series/series.module';
import {DiscsModule} from './discs/discs.module';
import {HttpClientModule} from '@angular/common/http';
import {UiModule} from './ui/ui.module';

import { ModalComponent } from './modal/modal.component';
//import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent/*,
    MovieDetailsComponent*/
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    MusicModule,
    SeriesModule,
    DiscsModule,
    HttpClientModule,
    UiModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent
   // ,MovieDetailsComponent
  ]
})
export class AppModule { }
