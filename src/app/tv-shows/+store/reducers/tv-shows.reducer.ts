import { ReducerClass, Action } from 'reducer-class';
import { TvShowsState, initialTvShowsState } from '../state/tv-shows.state';
import { GetAllTvShowsSuccess, GetTvShowSuccess, RemoveSelectedTvShow } from '../actions/tv-shows.actions';

export class TvShowsReducerClass extends ReducerClass<TvShowsState> {
  public initialState: TvShowsState = initialTvShowsState;

  @Action(GetAllTvShowsSuccess)
  public getAllTvShowsSuccess(state: TvShowsState, action: GetAllTvShowsSuccess): TvShowsState {
    return {
      ...state,
      allTvShows: action.payload
    };
  }

  @Action(GetTvShowSuccess)
  public getTvShowSuccess(state: TvShowsState, action: GetTvShowSuccess): TvShowsState {
    return {
      ...state,
      selectedTvShow: action.payload
    };
  }

  @Action(RemoveSelectedTvShow)
  public removeSelectedTvShow(state: TvShowsState, action: RemoveSelectedTvShow): TvShowsState {
    return {
      ...state,
      selectedTvShow: null
    };
  }
}

export const tvShowsReducer = TvShowsReducerClass.create();
