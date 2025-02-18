import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() : Observable<Task[]>{
    return of(TASKS); 
  }
}
