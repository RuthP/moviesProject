import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscsComponent } from './discs.component';
import { DiscComponent } from './disc/disc.component';
import { AddDiscComponent } from './add-disc/add-disc.component';
import { EditDiscComponent } from './edit-disc/edit-disc.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';
import { DiscSearchComponent } from './disc-search/disc-search.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DiscsComponent, DiscComponent, AddDiscComponent, EditDiscComponent, DiscListComponent, DiscDetailsComponent, DiscSearchComponent],
  declarations: [DiscsComponent, DiscComponent, AddDiscComponent, EditDiscComponent, DiscListComponent, DiscDetailsComponent, DiscSearchComponent]
})
export class DiscsModule { }
