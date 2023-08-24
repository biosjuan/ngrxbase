import { Component, OnInit } from '@angular/core';
import { TodoHttpService } from '../../store/services/todo-http.service';
import { TodoEntityService } from '../../store/services/todo-entity.service';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined;
  constructor(private todoEntityService: TodoEntityService) {}
  ngOnInit(): void {
    this.todoEntityService.add({
      completed: true,
      title: 'this is a NEW one',
    });
    this.todos$ = this.todoEntityService.getAll();
    this.todos$.subscribe((e) => console.log(JSON.stringify(e)));
  }
}
