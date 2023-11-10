import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'xianke',
      description: 'csgo',
      isDone: false
    },
    {
      id: 2,
      title: 'carzy',
      description: 'csgo',
      isDone: false
    },
    {
      id: 3,
      title: 'genshuo',
      description: 'csgo',
      isDone: false
    }
  ]
}
