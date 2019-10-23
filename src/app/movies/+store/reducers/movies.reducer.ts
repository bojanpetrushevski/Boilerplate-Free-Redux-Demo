import { ReducerClass, Action } from 'reducer-class';
import { IMoviesState, initialMovieState } from '../state/movies.state';
import * as fromMoviesActions from '../actions/movies.actions';

export class MoviesReducerClass extends ReducerClass<IMoviesState> {
  public initialState: IMoviesState = initialMovieState;

  @Action(fromMoviesActions.LoadAllMoviesSuccess)
  public LoadAllMoviesSuccess(state: IMoviesState, action: fromMoviesActions.LoadAllMoviesSuccess): IMoviesState {
    return {
      ...state,
      allMovies: action.payload
    };
  }
}

export const moviesReducer = MoviesReducerClass.create();
