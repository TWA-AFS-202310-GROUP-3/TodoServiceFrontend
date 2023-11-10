import { Injectable } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoItems: ToDoItem[] = [
    {
      id: 1,
      title: 'buy milk',
      description: 'buy some milk',
      isDone: false
    },
    {
      id: 2,
      title: 'buy bubble tea',
      description: 'buy some bubble tea',
      isDone: false
    }
  ];
  constructor() { }
  getAll():ToDoItem[] {
    return this.todoItems;
  }
  create(title: string, description: string):void {
    this.todoItems.push({
      id:this.todoItems.length+1,
      title: title,
      description: description,
      isDone: false
    })
  }
}
