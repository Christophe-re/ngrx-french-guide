import {createSelector} from '@ngrx/store';

import {AppState} from '../../store';


// La première fonction amène vers le state todos
export const selectTodoListState$ = (state: AppState) => state.todos;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTodos$ = createSelector(selectTodoListState$, (todos) => todos.data);

export const selectTodoSelected$ =
  createSelector(selectTodoListState$, (todos) => todos.selectedTodo);

export const selectTodosLoading$ =
  createSelector(selectTodoListState$, (todos) => todos.loading);

export const selectTodosLoaded$ =
  createSelector(selectTodoListState$, (todos) => todos.loaded);
