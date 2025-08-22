import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  numberAttribute,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MainMoviesComponent } from '../../components/main-movies/main-movies.component';
import { MoviesService } from '../movies/movies.service';
import { MoviesModel } from './../movies/movies.model';
import {
  DashboardMovie,
  DashboardMovies,
  NewReleaseMovie,
  NewReleaseMovies,
} from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  imports: [MainMoviesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [MoviesService],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  router = inject(Router);
  movieService = inject(MoviesService);
  homePageMovies: MoviesModel[] = [];
  @ViewChild('header') header!: ElementRef<HTMLElement>;
  @ViewChild('headerContentImage')
  headerContentImage!: ElementRef<HTMLImageElement>;

  currentImageUrl!: string;
  currentImageIndex: number = 0;
  dashboardMovies: DashboardMovie[] = DashboardMovies;
  intervalId!: number;

  newReleaseMovies: NewReleaseMovie[] = NewReleaseMovies;
  currentPage: number = 1;

  ngOnInit(): void {
    this.movieService.getAllMovies(this.currentPage).subscribe({
      next: (res) => {
        this.homePageMovies = res.data;
      },
    });
  }
  ngAfterViewInit(): void {
    this.intervalId = window.setInterval(() => {
      this.changeBackground();
    }, 5000);
  }
  changeBackground() {
    if (window.screen.width < 768) {
      this.currentImageIndex = (this.currentImageIndex + 1) % 5;

      this.header.nativeElement.style.backgroundImage = `url("assets/mobileView/${
        this.dashboardMovies[this.currentImageIndex].mobMovieImage
      }")`;

      this.headerContentImage.nativeElement.src = `assets/header-image-name/${
        this.dashboardMovies[this.currentImageIndex].movieTitle
      }`;
    } else {
      this.currentImageIndex = (this.currentImageIndex + 1) % 5;

      this.header.nativeElement.style.backgroundImage = `url("assets/pcView/${
        this.dashboardMovies[this.currentImageIndex].pcMovieImage
      }")`;

      this.headerContentImage.nativeElement.src = `assets/header-image-name/${
        this.dashboardMovies[this.currentImageIndex].movieTitle
      }`;
    }
  }

  handleMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }
}
