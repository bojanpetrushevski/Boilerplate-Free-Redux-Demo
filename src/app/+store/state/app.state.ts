export interface State {
    appState: AppState;
}

export interface AppState {
    title: string;
}

export const initialAppState: AppState = {
    title: null
};
