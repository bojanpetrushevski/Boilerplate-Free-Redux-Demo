
import { InjectionToken } from '@angular/core';
import { tvShowsReducer } from './tv-shows.reducer';

// tslint:disable-next-line:no-any
export const TV_SHOWS_REDUCERS_MAP = new InjectionToken<any>('Tv Shows Reducers Map', { factory: () => ({
  tvShowsState: tvShowsReducer
})});
