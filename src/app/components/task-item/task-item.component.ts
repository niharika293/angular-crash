import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Output } from '@angular/core';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()task!: Task;
  faTimes = faTimes;
  @Output() taskItemTobeDeleted = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTaskItem(task : Task){
    console.log("Deleting task", task);
    this.taskItemTobeDeleted.emit(task);
  }

  onToggle(task : Task){
    console.log("emitting from onToggle", task);
    this.onToggleReminder.emit(task);
  }

}
