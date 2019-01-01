import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    readonly BASE_URL = '/api/tasks';

    constructor(private http: HttpClient) {}

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.BASE_URL);
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.BASE_URL, task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(this.BASE_URL, task);
    }
}
