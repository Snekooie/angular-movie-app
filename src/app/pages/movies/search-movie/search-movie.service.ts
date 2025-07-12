import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesResponse } from '../movies.model';

@Injectable({ providedIn: 'root' })
export class SearchMovieService {
  constructor() {}
  http = inject(HttpClient)
  searchTerm = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTerm.asObservable();

  updateSearchTerm(term: string): void {
    this.searchTerm.next(term);  //Updates search term
  }

  getMovieByName(searchTerm:string, number: number):Observable<MoviesResponse>{
    // debugger
    console.log('get movie by name');
    return this.http.get<MoviesResponse>(`https://moviesapi.ir/api/v1/movies?q=${searchTerm}&page=${number}`)
  }
}
