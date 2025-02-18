import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";
  
  constructor(private httpClient : HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task : Task) : Observable<Task[]>{
    const url = `${this.apiUrl}/${task?.id}`;
    return this.httpClient.delete<Task[]>(url);
  }
}
