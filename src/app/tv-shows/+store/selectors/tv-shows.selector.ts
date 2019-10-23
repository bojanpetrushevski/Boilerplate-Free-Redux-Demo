import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IState, TV_SHOWS_FEATURE_KEY } from '../state/tv-shows.state';

const selectTvShowsState = createFeatureSelector<IState>(TV_SHOWS_FEATURE_KEY);

const selectAllTvShows = createSelector (
  selectTvShowsState,
  (state: IState) => state.tvShowsState.allTvShows
);

const selectTvShow = createSelector (
  selectTvShowsState,
  (state: IState) => state.tvShowsState.selectedTvShow
);

export const tvShowsQuery = {
  selectAllTvShows,
  selectTvShow
};
