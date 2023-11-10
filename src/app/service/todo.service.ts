import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'xianke',
      description: 'csgo',
      isDone: false,
    },
    {
      id: 2,
      title: 'carzy',
      description: 'csgo',
      isDone: false,
    },
    {
      id: 3,
      title: 'genshuo',
      description: 'csgo',
      isDone: false,
    },
  ];

  constructor() { }

  getAll(){
    return this.items
  }

  create(title: string, description: string){
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false
    })
  }

  markDone(id: number){
    const currentItem = this.items.find(it => it.id === id)
    if(currentItem){
      currentItem.isDone = true
    }
  }

  getItemById(id: number){
    return this.items.find(it => it.id === id)
  }
}
