import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: ToDoItem[] = [
    {
      id : 1,
      title: "buy milk",
      description: "buy one bottle of milk",
      isDone: false
    },
    {
      id : 2,
      title: "buy bread",
      description: "buy one basket of bread",
      isDone: true
    }
  ]

}
