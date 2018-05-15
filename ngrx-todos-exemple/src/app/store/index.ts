import {InjectionToken} from '@angular/core';
import {TodoListEffects} from '@Effects/todo-list.effect';
import {ActionReducerMap} from '@ngrx/store';

import {TodoListState} from '../models/todo';
import {todosReducer} from './reducers/todo-list.reducer';

const reducers = {
    todos: todosReducer
};

export interface AppState {
    todos: TodoListState;
}

export function getReducers() {
    return reducers;
}

export const appEffects = [TodoListEffects];

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
