import { Movie } from '../../models/movie.view-model';

export const MOVIES_FEATURE_KEY = 'movies';

export interface IState {
    moviesState: IMoviesState;
}

// tslint:disable-next-line:no-empty-interface
export interface IMoviesState {
    allMovies: Movie[];
}

export const initialMovieState: IMoviesState = {
    allMovies: null
};
