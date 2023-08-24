import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../reducers/todo.reducers';

export const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);
