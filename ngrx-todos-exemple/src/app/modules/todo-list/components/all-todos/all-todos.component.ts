import {TodoListModule} from '@Actions/todo-list.action';
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {selectTodos$} from '@Selectors/todo-list.selector';
import {AppState} from '@StoreConfig';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Todo} from '../../../../models/todo';
import {TodoListService} from '@Services/todo-list.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html'
})
export class AllTodosComponent implements OnInit {

  public todos$: Observable<Todo[]>;
  public todoForm: FormGroup;
  private todosLength: number;

  constructor(
    private store: Store<AppState>,
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
    private todoListService: TodoListService
  ) {
    this.todos$ = store
      .pipe(
        select(selectTodos$),
        tap((todos) => {
          this.todosLength = todos.length;
        })
      );

    this.todoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });
  }

  ngOnInit() {
    // this.store.dispatch(new TodoListModule.InitTodos());
    this.todoListService.getTodos()
      .subscribe((todos) => {
        this.store.dispatch(new TodoListModule.InitTodos(todos));
      });
  }

  createTodo(todo: Todo) {
    const payload = {
      ...todo,
      userId: 1,
      id: this.todosLength + 1
    };
    this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }

  selectTodo(todo) {
    this.store.dispatch(new TodoListModule.SelectTodo(todo));
    this.router.navigate(['/todo-list/select-todo']);
  }

}
