
import { InjectionToken } from '@angular/core';
import { appReducer } from './app.reducer';

// tslint:disable-next-line:no-any
export const APP_REDUCERS_MAP = new InjectionToken<any>('App Reducers Map', { factory: () => ({
  appState: appReducer
})});
