import { Component, OnInit } from '@angular/core';
import { IMovie, MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-list-display',
  templateUrl: './movie-list-display.component.html',
  styleUrl: './movie-list-display.component.css'
})
export class MovieListDisplayComponent {

  movieList!: IMovie[] ;
  
  constructor(public _movieService: MovieServiceService) {}
  
  OnDetailClick(id: number) {
    this._movieService.DisplayDetails(id);
  }
  OnDeleteClick(id: number) {
    this._movieService.DeleteMovie(id)
  }


}
