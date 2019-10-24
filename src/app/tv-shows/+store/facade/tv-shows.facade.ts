import { Injectable, Query } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetAllTvShows, GetTvShow, RemoveSelectedTvShow } from '../actions/tv-shows.actions';
import { State } from '../state/tv-shows.state';
import { TvShowViewModel } from '../../models/tv-shows.view-model';
import { tvShowsQuery } from '../selectors/tv-shows.selector';

@Injectable()
export class TvShowsFacade {
    constructor(private store: Store<State>) {}

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

    public removeSelectedTvShow(): void {
        return this.store.dispatch(new RemoveSelectedTvShow());
    }
 }
