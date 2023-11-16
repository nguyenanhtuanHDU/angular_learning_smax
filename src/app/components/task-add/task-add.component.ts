import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/models';
import * as TaskActions from '../../store/action';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  taskName: string = '';
  taskIsDone: boolean = false;

  addTask() {
    this.store.dispatch(
      new TaskActions.AddTask({ name: this.taskName, isDone: this.taskIsDone })
    );
  }

  resetTask() {
    this.store.dispatch(new TaskActions.ResetTask(true));
  }
}
