import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksSharedModule } from 'app/shared';
import {
    TaskComponent,
    TaskDetailComponent,
    TaskUpdateComponent,
    TaskDeletePopupComponent,
    TaskDeleteDialogComponent,
    taskRoute,
    taskPopupRoute
} from './';
import { TasksComponent } from 'app/entities/customtask/tasks.component';
import { TasksAddComponent } from 'app/entities/customtask/tasks-add/tasks-add.component';
import { TasksListComponent } from 'app/entities/customtask/tasks-list/tasks-list.component';

const ENTITY_STATES = [...taskRoute, ...taskPopupRoute];

@NgModule({
    imports: [TasksSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TaskComponent,
        TaskDetailComponent,
        TaskUpdateComponent,
        TaskDeleteDialogComponent,
        TaskDeletePopupComponent,
        TasksComponent,
        TasksAddComponent,
        TasksListComponent
    ],
    entryComponents: [TaskComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksTaskModule {}
