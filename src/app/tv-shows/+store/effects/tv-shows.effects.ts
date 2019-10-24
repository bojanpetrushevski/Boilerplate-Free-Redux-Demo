import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { GetAllTvShows, GetAllTvShowsSuccess, GetTvShow, GetTvShowSuccess } from '../actions/tv-shows.actions';
import { TvShowViewModel } from '../../models/tv-shows.view-model';
import { State } from '../state/tv-shows.state';
import { TvShowsApiService } from '../../services/tv-shows-api.service';

@Injectable()
export class TvShowsEffects {
    @Effect()
    getTvShows$ = this.actions$.pipe(
        ofType<GetAllTvShows>(GetAllTvShows.type),
        switchMap(() => this.tvShowsApiService.getAllTvShows()),
        switchMap((tvShows: TvShowViewModel[]) => of(new GetAllTvShowsSuccess(tvShows)))
    );

    @Effect()
    getTvShow$ = this.actions$.pipe(
        ofType<GetTvShow>(GetTvShow.type),
        switchMap((action) => this.tvShowsApiService.getTvShowById(action.payload)),
        switchMap((tvShow: TvShowViewModel) => of(new GetTvShowSuccess(tvShow)))
    );

    constructor(
        private tvShowsApiService: TvShowsApiService,
        private actions$: Actions,
        private store: Store<State>
    ) { }
}
