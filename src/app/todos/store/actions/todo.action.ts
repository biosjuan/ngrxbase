import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/Todo';

export const loadTodos = createAction('[Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);
