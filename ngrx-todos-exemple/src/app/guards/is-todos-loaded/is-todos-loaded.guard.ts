import {TodoListModule} from '@Actions/todo-list.action';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectTodosLoaded$} from '@Selectors/todo-list.selector';
import {AppState} from '@StoreConfig';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class IsTodosLoadedGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store
      .pipe(
        select(selectTodosLoaded$),
        map(isLoaded => {
          if (!isLoaded) {
            this.store.dispatch(new TodoListModule.LoadInitTodos());
          }
          return true;
        })
      );
  }
}
