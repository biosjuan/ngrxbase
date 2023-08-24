import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/Todo';
import { loadTodosSuccess } from '../actions/todo.action';

export interface TodosState {
  todos: Todo[];
}

export const initialTodosState: TodosState = {
  todos: [],
};

export const todosReducer = createReducer(
  initialTodosState,
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos }))
);
