import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.view-model';
import { MoviesResponse } from '../responses/movies.response';
import { MoviesMapper } from '../mappers/movies.mapper';

@Injectable()
export class MoviesApiService {

  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
      return this.http.get<MoviesResponse>
      ('https://api.themoviedb.org/3/tv/popular?api_key=27c57a2fa0a497f5254514cfb15a0827&language=en-US&page=1')
      .pipe(
        map((allMovies: MoviesResponse) => {
          return allMovies.results.map(movie => MoviesMapper.toMovie(movie));
        })
      );
  }
}
