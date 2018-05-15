import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@Env';
import {Todo} from '@Models/todo';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoListService {
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
  }
  createTodo(body): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/todos`, body);
  }

  deleteTodo(id): Observable<number> {
    return this.http.delete<Todo>(`${environment.apiUrl}/todos/${id}`)
      // Le pipe va nous renvoyer l'id de la todo si la suppression
      // est réussie
      .pipe(map(response => id));

  }
}
