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
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    /*在组件初始化时就会调用ngOnInit() */
    this.items = this.todoService.getAll();
  }

  onMarkDown(id: number) {
    this.todoService.markDone(id);
  }
}
