export interface DashboardMovie {
  movieTitle: string;
  mobMovieImage: string;
  pcMovieImage: string;
}

export interface NewReleaseMovie {
  movieTitle: string;
  moviePoster: string;
  rateNumber: number;
}

export const DashboardMovies: DashboardMovie[] = [
  {
    pcMovieImage: 'Ballerina-2025-pc-wall.jpg.webp',
    mobMovieImage: 'Ballerina-2025-mob-wall.jpg.webp',
    movieTitle: 'balleriane.png',
  },

  {
    pcMovieImage: 'Squid-Game-2025-Season-3-Back.jpg',
    mobMovieImage: 'Squid-Game-2025-Season-3-Mobile.jpg',
    movieTitle: 'Squid-Game-S3-Slider-Logo.png.webp',
  },
  {
    pcMovieImage: 'Fountain-of-Youth-slide-pc.jpg.webp',
    mobMovieImage: 'Fountain-of-Youth-slide-mob.jpg.webp',
    movieTitle: 'Fountain-of-Youth-slide-logo.png.webp',
  },

  {
    pcMovieImage: 'Thunderbolts-Desk.jpg',
    mobMovieImage: 'Thunderbolts-2025-Wallpaper.jpg.webp',
    movieTitle: 'Thunderbolts_2025_logo.png',
  },
  {
    pcMovieImage: 'the-last-of-us-slide-desk.jpg.webp',
    mobMovieImage: 'the-last-of-us-slide-desk.jpg.webp',
    movieTitle: 'the-last-of-us-slide-logo.png.webp',
  },
];

export const NewReleaseMovies: NewReleaseMovie[] = [
  {
    movieTitle: 'Sinners',
    moviePoster: 'assets/dashboard-movie-poster/sinners.jpg',
    rateNumber: 7.7,
  },
  {
    movieTitle: '28 Years Later',
    moviePoster: 'assets/dashboard-movie-poster/28yearslater.jpg',
    rateNumber: 7.1,
  },
  {
    movieTitle: 'Bring Her Back',
    moviePoster: 'assets/dashboard-movie-poster/bringherback.jpg',
    rateNumber: 7.3,
  },
  {
    movieTitle: 'Eden',
    moviePoster: 'assets/dashboard-movie-poster/eden.jpg',
    rateNumber: 7.5,
  },
  {
    movieTitle: 'F1: The Movie',
    moviePoster: 'assets/dashboard-movie-poster/f1.jpg',
    rateNumber: 7.9,
  },
  {
    movieTitle: 'Ironheart',
    moviePoster: 'assets/dashboard-movie-poster/ironheart.jpg',
    rateNumber: 4.2,
  },
  {
    movieTitle: 'Mission Impossible: The Final Reckoning',
    moviePoster: 'assets/dashboard-movie-poster/missionimpossible.jpg',
    rateNumber: 7.4,
  },
];
