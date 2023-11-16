export interface ITask {
  name: string;
  isDone: boolean;
}

export interface AppState {
  tasks: ITask[];
}
