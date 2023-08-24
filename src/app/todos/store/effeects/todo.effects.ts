import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoEntityService } from '../services/todo-entity.service';
import * as TodoActions from '../actions/todo.action';

@Injectable()
export class TodoEffects {
  constructor(
    private todoService: TodoEntityService,
    private actions$: Actions
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getAll().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError(() => of({ type: '[Todos] Load Todos Failure' }))
        )
      )
    )
  );
}
