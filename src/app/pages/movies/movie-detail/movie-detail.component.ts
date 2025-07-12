import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from './movie-detail.model';
import { MovieDetailService } from './movie-detail.service';

@Component({
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  providers: [MovieDetailService],
})
export class MovieDetailPageComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);
  movieDetailService = inject(MovieDetailService);
  movieDetail!: MovieDetailResponse;

  ngOnInit(): void {
    const movieId = Number(this.activateRoute.snapshot.paramMap.get('id'));

    this.movieDetailService.getMovieDetail(movieId).subscribe({
      next: (res) => {
        console.log(res);
        this.movieDetail = res;
        console.log(this.movieDetail);
        console.log(this.movieDetail.runtime);
      },
    });
  }
}
