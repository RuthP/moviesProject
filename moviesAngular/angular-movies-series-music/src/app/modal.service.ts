import { Injectable } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';

const MODAL = {
  focusFirst: ModalComponent,
  detailsMovie: MovieDetailsComponent
};

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService : NgbModal) { }

  open(name: string) {
    this.modalService.open(MODAL[name]);
  }
}
