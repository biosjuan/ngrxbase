import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoDataService } from './store/services/todo-data.servise';
import { TodoEntityService } from './store/services/todo-entity.service';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

export const todoRoutes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
];

const entityMetadata: EntityMetadataMap = {
  Todo: {},
};

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  providers: [TodoDataService, TodoEntityService],
})
export class TodosModule {
  constructor(
    private entityDefinitionService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private todoDataService: TodoDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Todo', todoDataService);
  }
}
