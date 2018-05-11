import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AllTodosComponent} from './components/all-todos/all-todos.component';
import {SelectTodoComponent} from './components/select-todo/select-todo.component';
import {TodoListComponent} from './todo-list.component';
import {todoListRouting} from './todo-list.routing';

@NgModule({
  imports: [
    CommonModule,
    todoListRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TodoListComponent, SelectTodoComponent, AllTodosComponent]
})

export class TodoListModule {}
