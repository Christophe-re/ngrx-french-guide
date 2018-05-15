import {TodoListModule} from '@Actions/todo-list.action';
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectTodos$, selectTodosLoading$} from '@Selectors/todo-list.selector';
import {TodoListService} from '@Services/todo-list.service';
import {AppState} from '@StoreConfig';
import {Observable} from 'rxjs/Observable';

import {Todo} from '../../../../models/todo';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {

  public todos$: Observable<Todo[]>;
  public todoForm: FormGroup;
  private todosLength: number;
  public todosLoading: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
    private todoListService: TodoListService
  ) {

    this.todos$ = store
      .pipe(
        select(selectTodos$),
      /*tap((todos) => {
        console.log('selectTodos', todos);
        this.todosLength = todos.length;
      }) */
    );

    this.todoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });

    this.todosLoading = store.pipe(select(selectTodosLoading$));
  }

  ngOnInit() {
    // this.store.dispatch(new TodoListModule.InitTodos());
    // this.todoListService.getTodos()
    // .subscribe((todos) => {
    //   //     this.store.dispatch(new TodoListModule.InitTodos(todos));
    // });
    //  this.store.dispatch(new TodoListModule.LoadInitTodos());

  }

  createTodo(todo: Todo) {
    const payload = {
      ...todo,
      userId: 1, // userId au pif
      // id: this.todosLength + 1
    };
    // this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.store.dispatch(new TodoListModule.LoadCreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoListModule.LoadDeleteTodo(id));
  }

  selectTodo(todo) {
    this.store.dispatch(new TodoListModule.SelectTodo(todo));
    this.router.navigate(['/todo-list/select-todo']);
  }

}
