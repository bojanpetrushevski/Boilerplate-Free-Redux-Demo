import { State, AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectApp = (state: State) => state.appState;

const selectTitle = createSelector(
    selectApp,
    (app: AppState) => app.title
);

export const appQuery = {
    selectTitle
};
