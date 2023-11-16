import { Action } from '@ngrx/store';
import { ITask } from './models/models';

export enum TaskEnums {
  addTask = 'ADD_TASK',
  removeTask = 'REMOVE_TASK',
  resetTask = 'RESET_TASK',
}

export class AddTask implements Action {
  type = TaskEnums.addTask;
  constructor(public payload: ITask) {}
}

export class RemoveTask implements Action {
  type = TaskEnums.removeTask;
  constructor(public payload: number) {}
}

export class ResetTask implements Action {
  type = TaskEnums.resetTask;
  constructor(public payload: boolean) {}
}

export type ActionType = AddTask | RemoveTask | ResetTask;
