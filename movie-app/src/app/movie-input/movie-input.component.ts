import { Component } from '@angular/core';
import { IMovie, MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrl: './movie-input.component.css'
})
export class MovieInputComponent {

  movieTitle!: string;
  movieYear!: number;
  movieRating!: number;
  movieGenre!: string;
  movie!: IMovie;
  counter: number = 1;
is: any;

  constructor(private _movieService: MovieServiceService) { }
  
  OnSubmit(event: SubmitEvent) {

    event.preventDefault();
    this.movie = {
      id: this.counter,
      title: this.movieTitle,
      year: this.movieYear,
      rating: this.movieRating,
      genre: this.movieGenre,
    }
    this._movieService.AddMovie(this.movie);
    this.counter++;
  }



}
