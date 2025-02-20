import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
     });
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task).subscribe(() =>{
      this.tasks = this.tasks.filter((taskEle) => taskEle.id !== task.id);
    });
  }

  toggleReminder(task : Task){
    task.reminder = !task.reminder; // Send the updated task on server.
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task : Task){
    console.log("new task from parent ", task);
    this.taskService.addTask(task).subscribe((taskRes) => {
      this.tasks.push(taskRes);
    });
  }

}
