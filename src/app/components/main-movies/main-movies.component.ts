import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-movies',
  imports: [],
  templateUrl: './main-movies.component.html',
  styleUrl: './main-movies.component.css',
})
export class MainMoviesComponent {
  @Input() imageSrc: string = '';
  @Input() movieTitle: string = '';
  @Input() rateNumber: string = '';

  @Output() onMovieDetail = new EventEmitter();

  handleMovieDetail() {
    this.onMovieDetail.emit();
  }
}
