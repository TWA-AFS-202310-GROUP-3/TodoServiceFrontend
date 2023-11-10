import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
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
}
