import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicSearchComponent } from './music-search/music-search.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MusicComponent, AddMusicComponent, EditMusicComponent, MusicListComponent, MusicDetailsComponent, MusicSearchComponent],
  declarations: [MusicComponent, AddMusicComponent, EditMusicComponent, MusicListComponent, MusicDetailsComponent, MusicSearchComponent]
})
export class MusicModule { }
