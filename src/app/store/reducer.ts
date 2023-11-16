import { ITask } from './models/models';
import * as TaskActions from './action';
import { Action } from '@ngrx/store';

export const initTasks: ITask[] = [
  {
    name: 'Learning',
    isDone: true,
  },
  {
    name: 'Playing game',
    isDone: false,
  },
];

const resetTasks:ITask[] = [...initTasks];

export const mainReducer = (
  state: ITask[] = initTasks,
  action: TaskActions.ActionType | Action
): ITask[] => {
  switch (action.type) {
    case TaskActions.TaskEnums.addTask:
      return [...state, (action as TaskActions.AddTask).payload];
    case TaskActions.TaskEnums.removeTask:
      const newState = [...state];
      newState.splice((action as TaskActions.RemoveTask).payload, 1);
      return newState;
    case TaskActions.TaskEnums.resetTask:
      return [...resetTasks];

    default:
      return state;
  }
};

