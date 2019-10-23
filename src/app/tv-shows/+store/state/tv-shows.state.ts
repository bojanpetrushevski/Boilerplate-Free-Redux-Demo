import { TvShowViewModel } from '../../models/tv-shows.view-model';

export const TV_SHOWS_FEATURE_KEY = 'tv-shows';

export interface IState {
    tvShowsState: TvShowsState;
}

export interface TvShowsState {
    allTvShows: TvShowViewModel[];
    selectedTvShow: TvShowViewModel;
}

export const initialTvShowsState: TvShowsState = {
    allTvShows: null,
    selectedTvShow: null
};
