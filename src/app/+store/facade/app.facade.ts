import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../state/app.state';
import { Observable } from 'rxjs';
import { appQuery } from '../selectors/app.selector';
import { SetTitle } from '../actions/app.actions';

@Injectable()
export class AppFacade {

  constructor(private store: Store<State>) { }

  public setTitle(name: string): void {
      this.store.dispatch(new SetTitle(name));
  }

  public selectTitle(): Observable<string> {
      return this.store.pipe(select(appQuery.selectTitle));
  }
}
