import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
    @Output()
    addTask = new EventEmitter<Task>();

    addTaskValue: string;

    constructor() {}

    ngOnInit() {}

    onEnter(event) {
        this.addTask.emit(new Task(event.target.value));
        this.addTaskValue = '';
    }
}
