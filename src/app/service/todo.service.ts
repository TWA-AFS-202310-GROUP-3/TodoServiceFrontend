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

  create(title:string,description:string) {
    this.items.push({
      id:this.items.length+1,
      title:title,
      description:description,
      isDone:false
    })
  }

  markDone(id:number) {
    const currentItem = this.items.find(i => i.id == id)
    if(currentItem){ //if currentItem exist
      currentItem.isDone = true //因为currentItem是对象，所以可以const，引用没变，实际变了
    }
  }
}
