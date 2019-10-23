import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState } from '../state/movies.state';
import { Observable } from 'rxjs';
import { appQuery } from '../selectors/movies.selector';
import { SetAppName } from '../actions/movies.actions';

@Injectable()
export class MoviesFacade { }
