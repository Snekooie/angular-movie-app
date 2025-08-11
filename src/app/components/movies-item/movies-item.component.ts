import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-movies-item',
  imports: [Toast],
  providers: [MessageService],
  templateUrl: './movies-item.component.html',
  styleUrl: './movies-item.component.css',
})
export class MoviesItemComponent {
  messageService = inject(MessageService);

  isLiked: boolean = false;

  @Input() title: string = '';
  @Input() year: string = '';
  @Input() imageSrc: string = '';
  @Input() imdbRate: string = '';

  @Output() onMovieSelect = new EventEmitter();
  @Output() onMovieLiked = new EventEmitter();

  handleMovieSelect() {
    this.onMovieSelect.emit();
  }

  handleLike() {
    this.onMovieLiked.emit();
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Movie Added To Favorites',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Movie Deleted From Favorites',
        life: 3000,
      });
    }
  }
}
