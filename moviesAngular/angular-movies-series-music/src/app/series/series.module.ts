import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesComponent } from './series.component';
import { SerieComponent } from './serie/serie.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { EditSerieComponent } from './edit-serie/edit-serie.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { SerieSearchComponent } from './serie-search/serie-search.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesComponent, SerieComponent, AddSerieComponent, EditSerieComponent, SeriesListComponent, SerieDetailsComponent, SerieSearchComponent],
  declarations: [SeriesComponent, SerieComponent, AddSerieComponent, EditSerieComponent, SeriesListComponent, SerieDetailsComponent, SerieSearchComponent]
})
export class SeriesModule { }
