import { Component } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
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

  onComplete(id: number): void {
    let item = this.todoItems.find(item => item.id === id);
    if (item) item.isDone = true;
  }
}
