import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];

  constructor( //constructor将需要用的属性加进来
    //注入todoService
    private todoService: TodoService
  ) {}
  ngOnInit(){ //在组建load（初始化）时调用
    this.items = this.todoService.getAll() //get all items in todoService
  }
}
