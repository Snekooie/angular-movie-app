import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailResponse } from './movie-detail.model';


@Injectable({providedIn: 'root'})
export class MovieDetailService {
  http = inject(HttpClient);

  getMovieDetail(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(
      `https://moviesapi.ir/api/v1/movies/${id}`
    );
  }
}

