import { ReducerClass, Action } from 'reducer-class';
import { initialAppState } from '../state/movies.state';
import * as fromAppActions from '../actions/movies.actions';

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
