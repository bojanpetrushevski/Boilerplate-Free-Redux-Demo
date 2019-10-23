import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { LoadAllMovies, LoadAllMoviesSuccess } from '../actions/movies.actions';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../../models/movie.view-model';
import { MoviesApiService } from '../../services/movies-api.service';
import { IState } from '../state/movies.state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<LoadAllMovies>(LoadAllMovies.type),
        switchMap(() => this.moviesApiService.getAllMovies()),
        switchMap((movies: Movie[]) => of(new LoadAllMoviesSuccess(movies)))
      );

    constructor(
        private moviesApiService: MoviesApiService,
        private actions$: Actions,
        private store: Store<IState>
      ) {}
 }
