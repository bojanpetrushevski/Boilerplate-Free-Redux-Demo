import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState } from '../state/app.state';
import { Observable } from 'rxjs';
import { appQuery } from '../selectors/app.selector';
import { SetAppName } from '../actions/app.actions';

@Injectable()
export class AppFacade {

  constructor(private store: Store<IState>) { }

  public setAppName(name: string): void {
      this.store.dispatch(new SetAppName(name));
  }

  public getAppName(): Observable<string> {
      return this.store.pipe(select(appQuery.getAppName));
  }
}
