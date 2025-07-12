import { MoviesModel } from './../movies.model';
import { Component, inject, OnInit } from '@angular/core';
import { SearchMovieService } from './search-movie.service';

@Component({
  selector: 'app-search-movie',
  imports: [],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css',
})
export class SearchMovieComponent implements OnInit {
  searchMovieService = inject(SearchMovieService);

  movieByName: MoviesModel[] = [];

  ngOnInit(): void {
    this.searchMovieService.searchTerm.subscribe((term) => {
      // console.log(term);
      // debugger
      // this.movieResponse = this.movieResponse.filter((movie) => {
      //   return movie.title.toLowerCase().includes(term.toLowerCase());
      // });
      this.searchMovieService.getMovieByName(term, 1).subscribe({
        next: (res) => {
          console.log(res);
          console.log(res.data);

          this.movieByName = res.data.slice(0,1);
          console.log('moviebyname:', this.movieByName);
        },
      });
    });
  }
}
