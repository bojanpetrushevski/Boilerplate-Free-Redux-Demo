export interface IState {
    appState: IAppState;
}

// tslint:disable-next-line:no-empty-interface
export interface IAppState {
    appName: string;
}

export const initialAppState: IAppState = {
    appName: 'Boilerplate Free Redux'
};
