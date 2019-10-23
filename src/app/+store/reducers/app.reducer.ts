import { ReducerClass, Action } from 'reducer-class';
import { IAppState, initialAppState } from '../state/app.state';
import * as fromAppActions from '../actions/app.actions';

export class AppReducerClass extends ReducerClass<IAppState> {
  public initialState: IAppState = initialAppState;

  @Action(fromAppActions.SetAppName)
  public setAppName(state: IAppState, action: fromAppActions.SetAppName): IAppState {
    console.log(action.type);
    return {
      ...state,
       appName: action.payload
    };
  }

  // @Action
  // public AuthSelectCompany(state: IAppState, action: fromAuthActions.SetAppName): IAppState {
  //   return {
  //     ...state,
  //     selectedCompany: action.payload
  //   };
  // }
}

export const appReducer = AppReducerClass.create();
