import { IState, IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectApp = (state: IState) => state.appState;

const getAppName = createSelector(
    selectApp,
    (app: IAppState) => app.appName
);

export const appQuery = {
    getAppName
};
