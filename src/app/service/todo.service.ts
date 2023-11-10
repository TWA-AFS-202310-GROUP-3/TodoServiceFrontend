import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  items: ToDoItem[] = [
    {
      id: 1,
      title: 'buy salt',
      description: 'cost',
      isDone: false,
    },
    {
      id: 2,
      title: 'buy bread',
      description: 'cost',
      isDone: false,
    },
  ];

  getAll() {
    return this.items;
  }
}
