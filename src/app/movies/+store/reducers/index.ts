
import { InjectionToken } from '@angular/core';
import { moviesReducer } from './movies.reducer';

// tslint:disable-next-line:no-any
export const MOVIES_REDUCERS_MAP = new InjectionToken<any>('Movies Reducers Map', { factory: () => ({
  moviesState: moviesReducer
})});
