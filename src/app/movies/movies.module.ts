import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MOVIES_FEATURE_KEY } from './+store/state/movies.state';
import { MoviesEffects } from './+store/effects/movies.effects';
import { MOVIES_REDUCERS_MAP } from './+store/reducers';
import { MaterialModule } from '../material-module/material-module.module';
import { MoviesFacade } from './+store/facade/movies.facade';
import { MoviesApiService } from './services/movies-api.service';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MoviesRoutingModule,
    StoreModule.forFeature(MOVIES_FEATURE_KEY, MOVIES_REDUCERS_MAP),
    EffectsModule.forFeature([MoviesEffects])
  ],
  exports: [
    MovieListComponent
  ],
  providers: [MoviesFacade, MoviesApiService]
})
export class MoviesModule { }
