import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items:ToDoItem[] =[ //prepare two data
    {
      id:1,
      title:"buy milk",
      description:"buy some milk",
      isDone:false
    },
    {
      id:2,
      title:"buy bread",
      description:"buy some bread",
      isDone:false
    }
  
  ]

}
