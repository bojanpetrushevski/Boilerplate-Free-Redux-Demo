import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from '../../+store/facade/movies.facade';
import { moviesReducer } from '../../+store/reducers/movies.reducer';
import { Movie } from '../../models/movie.view-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public allMovies: Movie[];
  public hoveredMovie: Movie;

  constructor(private moviesFacade: MoviesFacade) { }

  ngOnInit() {
    this.moviesFacade.loadAllMovies();
    this.moviesFacade.getAllMovies()
    .subscribe({
      next: (result: Movie[]) => {
        console.log(result);
        this.allMovies = result;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public hoverItem(movie: Movie): void {
    console.log(movie);
    this.hoveredMovie = movie;
  }
}
