import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetAllTvShows, GetTvShow } from '../actions/tv-shows.actions';
import { IState } from '../state/tv-shows.state';
import { TvShowViewModel } from '../../models/tv-shows.view-model';
import { tvShowsQuery } from '../selectors/tv-shows.selector';

@Injectable()
export class TvShowsFacade {
    constructor(private store: Store<IState>) {}

    public getAllTvShows(): void {
        this.store.dispatch(new GetAllTvShows());
    }

    public selectAllTvShows(): Observable<TvShowViewModel[]> {
        return this.store.pipe(select(tvShowsQuery.selectAllTvShows));
    }

    public getTvShow(tvShowId: string): void {
        this.store.dispatch(new GetTvShow(tvShowId));
    }

    public selectTvShow(): Observable<TvShowViewModel> {
        return this.store.pipe(select(tvShowsQuery.selectTvShow));
    }
 }
