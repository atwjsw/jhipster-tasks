import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { TasksComponent } from 'app/entities/customtask/tasks.component';
import { TasksAddComponent } from 'app/entities/customtask/tasks-add/tasks-add.component';
import { TasksListComponent } from 'app/entities/customtask/tasks-list/tasks-list.component';

@NgModule({
    imports: [TasksSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksHomeModule {}
