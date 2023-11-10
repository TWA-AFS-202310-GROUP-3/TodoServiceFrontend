import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoItems: ToDoItem[] = [];

  constructor(private todoService: TodoService) {
  }
  onComplete(id: number): void {
    let item = this.todoItems.find(item => item.id === id);
    if (item) item.isDone = true;
  }

  ngOnInit(): void {
    this.todoItems = this.todoService.todoItems;
  }
}
