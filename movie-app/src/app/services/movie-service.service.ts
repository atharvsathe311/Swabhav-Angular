import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  movieVar!: IMovie;

  movielist = signal<IMovie[]>([]);

  movie = signal<IMovie>(this.movieVar);

  AddMovie(newMovie: IMovie) {
    this.movielist.update(movie => [...movie, newMovie]);
  }

  DeleteMovie(id: number) {
    this.movielist.update(movie => this.ActualDelete(movie, id))
    this.movie.set(this.movieVar)
  }

  ActualDelete(movielist: IMovie[], id: number): IMovie[] {

    const movie = movielist.findIndex(movie => movie.id == id);
    console.log(movie);
    if (movie != -1) {
      movielist.splice(movie, 1);
    }
    return [...movielist]
  }

  DisplayDetails(id: number) {
    const movie = this.movielist().find(movie => movie.id == id);
    if (movie) {
      this.movie.set(movie);
    }
  }

}


export interface IMovie {
  id: number,
  title: string;
  year: number;
  rating: number;
  genre: string;
}


