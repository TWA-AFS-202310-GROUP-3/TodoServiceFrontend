import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoItems: ToDoItem[] = [];

  constructor(private httpService: TodoHttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onMarkDone(id: number): void {
    debugger
    const item = this.todoItems.find(item => item.id === id);
    if (item) {
      item.isDone = true;
      this.httpService.update(item.id,item).subscribe(() => this.refreshList());
    }
  }

  onGoToDetail(id: number): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onDelete(id: number): void {
    this.httpService.delete(id).subscribe(() => this.refreshList());
  }

  refreshList() {
    this.httpService.getAll().subscribe(todoItems => this.todoItems = todoItems);
    console.log(this.todoItems);
  }
}
