import { Component, Input, signal, Signal } from '@angular/core';
import { IMovie, MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-details-display',
  templateUrl: './movie-details-display.component.html',
  styleUrl: './movie-details-display.component.css'
})
export class MovieDetailsDisplayComponent {

  movieVar !: IMovie;
  // movie !: Signal<IMovie> ;
  // constructor(private _movieService : MovieServiceService)
  // {
    // this.movie = signal<IMovie>(this._movieService.movie());
  // }



  @Input() movieObj !: IMovie ;

}
