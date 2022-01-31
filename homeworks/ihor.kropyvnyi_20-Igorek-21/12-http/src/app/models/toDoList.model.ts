export interface IToDoList {
  id: string,
  isDone: boolean,
  text: IText
}

export interface IText {
  task: string | number
}
