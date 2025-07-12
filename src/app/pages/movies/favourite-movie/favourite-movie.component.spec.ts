import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMovieComponent } from './favourite-movie.component';

describe('FavouriteMovieComponent', () => {
  let component: FavouriteMovieComponent;
  let fixture: ComponentFixture<FavouriteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
