import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesItemComponent } from '../../components/movies-item/movies-item.component';
import { MoviesModel } from './movies.model';
import { MoviesService } from './movies.service';
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-movies',
  imports: [MoviesItemComponent, PaginationComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [MoviesService],
})
export class MoviesComponent implements OnInit {
  movies = inject(MoviesService);
  movieResponse: MoviesModel[] = [];
  router = inject(Router);
  ids: number[] = [];

  ngOnInit(): void {
    this.movies.getAllMovies().subscribe({
      next: (response) => {
        this.movieResponse = response.data;
        console.log(this.movieResponse);
        console.log(response.data[0].id);
      },
      error: () => {},
      complete: () => {},
    });
  }

  handleMovieDetail(id: number) {
    debugger;
    this.router.navigate(['/movie', id]);
  }

  handleMovieLiked(id: number) {
    // this.router.navigate(['/favourite'])
    if (this.ids.includes(id)) {
      // If already selected, remove it
      this.ids = this.ids.filter((id) => id !== id);
    } else {
      // Otherwise, add it to the array
      this.ids.push(id);
    }
    console.log(this.ids);
  }
}
