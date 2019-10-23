import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMoviesState from '../state/movies.state';
import { LoadAllMovies } from '../actions/movies.actions';
import { Observable } from 'rxjs';
import { moviesQuery } from '../selectors/movies.selector';
import { Movie } from '../../models/movie.view-model';

@Injectable()
export class MoviesFacade {
    constructor(private store: Store<fromMoviesState.IState>) {}

    public loadAllMovies(): void {
        this.store.dispatch(new LoadAllMovies());
    }

    public getAllMovies(): Observable<Movie[]> {
        return this.store.pipe(select(moviesQuery.getAllMovies));
    }
 }
