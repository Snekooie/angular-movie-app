import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MovieDetailResponse } from '../movies/movie-detail/movie-detail.model';
import { MovieDetailService } from '../movies/movie-detail/movie-detail.service';
import { MoviesService } from '../movies/movies.service';
import { MoviesModel } from './../movies/movies.model';
import { DashboardMovie, DashboardMovies, NewReleaseMovies, NewReleaseMovie } from './dashboard.model';
import { MainMoviesComponent } from "../../components/main-movies/main-movies.component";

@Component({
  selector: 'app-dashboard',
  imports: [SidebarModule, ButtonModule, MainMoviesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [MoviesService],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  movieService = inject(MoviesService);
  movieDetailService = inject(MovieDetailService);
  homePageMovies: MoviesModel[] = [];
  movieDetail!: MovieDetailResponse;
  homePageMoviesDetail!: MovieDetailResponse;
  @ViewChild('header') header!: ElementRef<HTMLElement>;
  @ViewChild('headerContentImage')
  headerContentImage!: ElementRef<HTMLImageElement>;

  currentImageUrl!: string;
  currentImageIndex: number = 0;
  dashboardMovies: DashboardMovie[] = DashboardMovies;
  intervalId!: number;

  newReleaseMovies: NewReleaseMovie[]= NewReleaseMovies;

  ngOnInit(): void {}
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
}

//   this.movieService.getAllMovies().subscribe({
//     next: (res) => {
//       console.log(res);
//       this.homePageMovies = res.data;
//       console.log(this.homePageMovies);
//       for (let index = 0; index < this.homePageMovies.length; index++) {
//         this.movieDetailService
//           .getMovieDetail(this.homePageMovies[index].id)
//           .subscribe({
//             next: (data) => {
//               this.homePageMoviesDetail = data;
//               console.log('hp', this.homePageMoviesDetail);
//               console.log(this.homePageMoviesDetail.plot);
//             },
//           });
//       }
//     },
//     error: (err) => {},
//   });
//   this.startAutoScroll()
// }
// startAutoScroll() {
//   this.scrollInterval = setInterval(() => {
//     if (this.scrollContainer && !this.isPaused) {
//       let container = this.scrollContainer.nativeElement;
//       container.scrollLeft += this.scrollSpeed;

//       // **Detect When Scroll Reaches End**
//       if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//         clearInterval(this.scrollInterval); // Stop scrolling
//         this.isPaused = true; // Set pause flag

//         setTimeout(() => {
//           container.style.transition = 'scroll-left 2s ease-in-out'; // Smooth transition
//           container.scrollLeft = 0; // Reset to first image

//           setTimeout(() => {
//             container.style.transition = 'none'; // Remove transition after reset
//             this.isPaused = false; // Resume scrolling
//             this.startAutoScroll(); // Restart auto-scroll
//           }, 2000); // Transition time matches the effect
//         }, 2000); // Pause duration before resetting
//       }
//     }
//   }, 50); // Adjust for smooth effect
// }
