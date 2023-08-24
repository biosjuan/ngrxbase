import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo';

@Injectable()
export class TodoDataService extends DefaultDataService<Todo> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Todo', http, httpUrlGenerator);
  }

  override getAll(): Observable<Todo[]> {
    return this.http
      .get<{ payload: Todo[] }>(`/api/todos`)
      .pipe(map((res) => res.payload));
  }
}
