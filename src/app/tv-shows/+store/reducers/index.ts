
import { InjectionToken } from '@angular/core';
import { appReducer } from './movies.reducer';

// tslint:disable-next-line:no-any
export const MOVIES_REDUCERS_MAP = new InjectionToken<any>('Movies Reducers Map', { factory: () => ({
  appState: appReducer
})});
