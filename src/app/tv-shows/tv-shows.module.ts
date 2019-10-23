import { NgModule } from '@angular/core';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module/material-module.module';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TV_SHOWS_FEATURE_KEY } from './+store/state/tv-shows.state';
import { TV_SHOWS_REDUCERS_MAP } from './+store/reducers';
import { TvShowsEffects } from './+store/effects/tv-shows.effects';
import { TvShowsFacade } from './+store/facade/tv-shows.facade';
import { TvShowsApiService } from './services/tv-shows-api.service';



@NgModule({
  declarations: [TvShowListComponent, TvShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TvShowsRoutingModule,
    StoreModule.forFeature(TV_SHOWS_FEATURE_KEY, TV_SHOWS_REDUCERS_MAP),
    EffectsModule.forFeature([TvShowsEffects])
  ],
  providers: [TvShowsFacade, TvShowsApiService]
})
export class TvShowsModule { }
