import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent {
  constructor(public tasks: TasksService) {

  }
  letupdtask = this.tasks.viewUpdate
  
}
