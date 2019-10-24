import { ReducerClass, Action } from 'reducer-class';
import { AppState, initialAppState } from '../state/app.state';
import * as fromAppActions from '../actions/app.actions';

export class AppReducerClass extends ReducerClass<AppState> {
  public initialState: AppState = initialAppState;

  @Action(fromAppActions.SetTitle)
  public setTitle(state: AppState, action: fromAppActions.SetTitle): AppState {
    return {
      ...state,
       title: action.payload
    };
  }
}

export const appReducer = AppReducerClass.create();
