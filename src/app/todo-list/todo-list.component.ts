import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {}
  ngOnInit() {
    /* ##在组件初始化时就会调用ngOnInit() */
    this.refreshList();
  }
  refreshList() {
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onMarkDown(todoItem: ToDoItem) {
    todoItem.isDone = true;
    this.todoHttpService.update(todoItem.id, todoItem).subscribe();
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(
      `/detail/${id}`
    ); /*##注意不是单引号‘’，而是··来写url */
  }

  onDelete(id: number) {
    this.todoHttpService.delete(id).subscribe(() => this.refreshList());
  }
}
