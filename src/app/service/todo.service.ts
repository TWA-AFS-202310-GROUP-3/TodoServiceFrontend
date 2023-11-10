import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
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
  getAll() {
    return this.items;
  }
  create(title: string, decirption: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: decirption,
      isDone: false,
    });
  }

  markDone(id: number) {
    const currentItem = this.items.find((_item) => _item.id === id);
    if (currentItem) {
      currentItem.isDone = true;
    }
  }
}
