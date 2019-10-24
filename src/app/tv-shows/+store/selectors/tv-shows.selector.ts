import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, TV_SHOWS_FEATURE_KEY } from '../state/tv-shows.state';

const selectTvShowsState = createFeatureSelector<State>(TV_SHOWS_FEATURE_KEY);

const selectAllTvShows = createSelector (
  selectTvShowsState,
  (state: State) => state.tvShowsState.allTvShows
);

const selectTvShow = createSelector (
  selectTvShowsState,
  (state: State) => state.tvShowsState.selectedTvShow
);

export const tvShowsQuery = {
  selectAllTvShows,
  selectTvShow
};
