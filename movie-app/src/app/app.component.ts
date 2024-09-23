import { Component } from '@angular/core';
import { IMovie, MovieServiceService } from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public _movieService : MovieServiceService) {}

}
