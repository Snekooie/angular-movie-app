import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { SearchMovieService } from '../../pages/movies/search-movie/search-movie.service';
import {
  DashboardMovie,
  DashboardMovies,
} from '../../pages/dashboard/dashboard.model';

@Component({
  selector: 'navabr-layout',
  templateUrl: 'navbar-layout.html',
  styleUrls: ['./navbar-layout.css'],
  imports: [RouterOutlet, FormsModule, SidebarModule, ButtonModule],
})
export class NavbarLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('navBtn') navBtn!: ElementRef<HTMLElement>;
  @ViewChild('barsIcon') barsIcon!: ElementRef<HTMLElement>;
  @ViewChild('timesIcon') timesIcon!: ElementRef<HTMLElement>;
  @ViewChild('navMenu') navMenu!: ElementRef<HTMLElement>;
  isNavOpen: boolean = false;
  ngOnInit() {}
  ngAfterViewInit(): void {}

  handleNavBtn(): void {
    if (this.isNavOpen) {
      this.barsIcon.nativeElement.style.display = 'block';
      this.timesIcon.nativeElement.style.display = 'none';
      this.navMenu.nativeElement.style.left = '-25rem';
      this.isNavOpen = false;
    } else {
      this.barsIcon.nativeElement.style.display = 'none';
      this.timesIcon.nativeElement.style.display = 'block';
      this.navMenu.nativeElement.style.left = '0';
      this.isNavOpen = true;
    }
  }

  // router = inject(Router);
  // searchMovieService = inject(SearchMovieService);

  // isMenuOpen: boolean = false;
  // searchQuery: string = '';

  // sidebarVisible: boolean = false;
  // movieName: string = '';

  // dashboardMovies: DashboardMovie[] = DashboardMovies;

  // readonly sidebarRef = viewChild.required<Sidebar>('sidebarRef');

  // closeCallback(e: any): void {
  //   this.sidebarRef().close(e);
  // }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  //   console.log(this.isMenuOpen);
  // }

  // // onSearch() {
  // //   console.log('Serach Query:', this.searchQuery);
  // // }

  // userMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  //   console.log(this.isMenuOpen);
  // }

  // // searchMovie(): void {
  // //   this.searchMovieService.updateSearchTerm(this.movieName);
  // //   console.log(this.movieName);
  // //    // Send the search term
  // // }

  // handleSearch(e: any) {
  //   this.searchMovieService.updateSearchTerm(e.target.value);
  //   console.log(e.target.value);
  // }
  // seraching() {
  //   this.router.navigate(['./movies/search']);
  // }
}
