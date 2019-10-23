import { ActionStandard, setPrefix } from 'flux-action-class';
import { Movie } from '../../models/movie.view-model';

setPrefix('');

export class LoadAllMovies extends ActionStandard { }

export class LoadAllMoviesSuccess extends ActionStandard<Movie[]> {}
