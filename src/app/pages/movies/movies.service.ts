import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResponse } from './movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  http = inject(HttpClient);

  getAllMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      'https://moviesapi.ir/api/v1/movies?page={page}'
    );
  }
}
