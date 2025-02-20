import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title : String = 'Tasks Tracker';
  showAddTask : boolean = false;
  subscription!: Subscription;
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((res) => {
      this.showAddTask = res;
    });
    // Whenever addToggle changes, we're passing into the subject & then making sure that we use the same value throughout.
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log(" Toggling add task");
    this.uiService.toggleAddTask();
  }

}
