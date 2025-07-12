import { Component, inject, OnInit } from '@angular/core';
import { MoviesModel } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favourite-movie',
  templateUrl: './favourite-movie.component.html',
  styleUrl: './favourite-movie.component.css',
  providers: [MoviesService],
})
export class FavouriteMovieComponent implements OnInit {
  singleMovieLiked = inject(MoviesService);
  singleMovie: MoviesModel[] = []

  ngOnInit(): void {
    this.singleMovieLiked.getAllMovies().subscribe()
  }
  handleMovieLiked() {}
}
