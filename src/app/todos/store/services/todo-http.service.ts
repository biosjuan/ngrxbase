import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Todo } from '../../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoHttpService {
  constructor(private http: HttpClient) {}

  // getAllTodos(): Observable<Todo[]> {
  //   return this.http
  //     .get<{ payload: Todo[] }>(`/api/todos`)
  //     .pipe(map((res) => res.payload));
  // }
}
