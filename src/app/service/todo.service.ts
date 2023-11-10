import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService { //替换 todoItem in todo-list component
  items: ToDoItem[] = [
    //prepare two data
    {
      id: 1,
      title: 'buy milk',
      description: 'buy some milk',
      isDone: false,
    },
    {
      id: 2,
      title: 'buy bread',
      description: 'buy some bread',
      isDone: false,
    },
  ];

  constructor() {}

  getAll(){
    return this.items
  }
}
