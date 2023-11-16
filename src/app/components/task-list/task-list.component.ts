import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TaskActions from 'src/app/store/action';
import { AppState, ITask } from 'src/app/store/models/models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Observable<ITask[]>;
  constructor(private store: Store<AppState>) {
    this.tasks = store.select('tasks');
    console.log('🚀 ~ this.tasks:', this.tasks);
  }

  ngOnInit(): void {}

  deleteTask(index: number) {
    this.store.dispatch(new TaskActions.RemoveTask(index));
  }
}
