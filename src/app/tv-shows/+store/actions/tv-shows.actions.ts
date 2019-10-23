import { ActionStandard, setPrefix } from 'flux-action-class';
import { TvShowViewModel } from '../../models/tv-shows.view-model';

setPrefix('');

export class GetAllTvShows extends ActionStandard {}

export class GetAllTvShowsSuccess extends ActionStandard<TvShowViewModel[]> {}

export class GetTvShow extends ActionStandard<string> {}

export class GetTvShowSuccess extends ActionStandard<TvShowViewModel> {}
