import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  items: ToDoItem[] = [
    {
      id: 1,
      title: 'buy milk',
      description: 'buy one bottle of milk',
      isDone: false,
    },
    {
      id: 2,
      title: 'buy bread',
      description: 'buy one basket of bread',
      isDone: true,
    },
  ];

  getAll(){
    return this.items;
  }

  create(title : string, description : string){
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description : description,
      isDone: false
    })
  }

  markDone(id: number){
    const currentItem = this.items.find(item => item.id === id)
    if(currentItem){
      currentItem.isDone = true
    }
  }
}
