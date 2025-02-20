import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  text: string = "";
  day: string = "";
  reminder : boolean = false;
  showAddTask : boolean = false;
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  subscription !: Subscription;

  constructor(private uiService : UiService) { 
    // Subscription is helping us to capture the same value across all the components based upon a single source of 
    // truth and use accordingly!
    this.subscription = this.uiService.onToggle().subscribe((res) => {
      this.showAddTask = res;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
