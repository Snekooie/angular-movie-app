import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarLayoutComponent } from './layout/navbar-layout/navbar-layout';
import { MovieDetailPageComponent } from './pages/movies/movie-detail/movie-detail.component';
import { UserProfileLayoutComponent } from './layout/user-profile-layout/user-profile-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: NavbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.routes').then(
            (r) => r.dashboardRoutes
          ),
      },
    ],
  },
  {
    path: 'movies',
    component: NavbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/movies/movies.routes').then((r) => r.moviesRoutes),
      },
    ],
  },
  {
    path: 'movie/:id',
    component: NavbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/movies/movie-detail/movie-detail.routes').then(
            (r) => r.moviesDetailRoutes
          ),
      },
    ],
  },
  {
    path: 'account',
    component: UserProfileLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user-profile/user-profile.routes').then(
            (r) => r.userProfileRoutes
          ),
      },
    ],
  },
  {
    path: 'favourite',
    component: NavbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/movies/favourite-movie/favourite-movie.routes').then(
            (routes) => routes.FavouriteMoviesRoutes
          ),
      },
    ],
  },
  {
    path: 'movies/search',
    component: NavbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/movies/search-movie/search-movie.routes').then(
            (routes) => routes.searchMoviesRoutes
          ),
      },
    ],
  }
];
