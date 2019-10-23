import { Movie } from '../../models/movie.view-model';

export interface IState {
    moviesState: IMoviesState;
}

// tslint:disable-next-line:no-empty-interface
export interface IMoviesState {
    allMovies: Movie[];
}

export const initialAppState: IMoviesState = {
    allMovies: null
};
