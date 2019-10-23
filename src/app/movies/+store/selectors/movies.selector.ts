import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from '../state/movies.state';

const getAuthState = createFeatureSelector<fromMovies.IState>(fromMovies.MOVIES_FEATURE_KEY);

const getAllMovies = createSelector (
  getAuthState,
  (movies: fromMovies.IState) => movies.moviesState.allMovies
);

export const moviesQuery = {
  getAllMovies
};
