import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    @Input()
    tasks: Array<Task> = new Array<Task>();

    @Output()
    toggleCompleted = new EventEmitter<Task>();

    constructor() {}

    ngOnInit() {}

    onCheck(task: Task, event) {
        // if (event.target.checked) {
        task.completed = event.target.checked;
        this.toggleCompleted.emit(task);
        // }
    }
}
