import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'navabr-layout',
  templateUrl: 'navbar-layout.html',
  styleUrls: ['./navbar-layout.css'],
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
})
export class NavbarLayoutComponent implements OnInit, AfterViewInit {
  router = inject(Router);
  location = inject(Location);
  @ViewChild('navBtn') navBtn!: ElementRef<HTMLElement>;
  @ViewChild('barsIcon') barsIcon!: ElementRef<HTMLElement>;
  @ViewChild('timesIcon') timesIcon!: ElementRef<HTMLElement>;
  @ViewChild('navMenu') navMenu!: ElementRef<HTMLElement>;
  isNavOpen: boolean = false;

  currentUrl: string = '';

  ngOnInit(): void {
    if (this.router && this.router.events) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.currentUrl = event.urlAfterRedirects;
          console.log(this.currentUrl);
        });
    }
  }

  get isHomePage(): boolean {
    const path = this.location.path();
    return path === '' || path === '/' || path.startsWith('/dashboard');
  }

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
