import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoItems: ToDoItem[] = [];

  constructor(private todoService: TodoService, private httpService: TodoHttpService, private router: Router) {
  }
  ngOnInit(): void {
    this.httpService.getAll().subscribe(todoItems => this.todoItems = todoItems);
  }

  onMarkDone(id: number): void{
    this.todoService.markDone(id);
  }

  onGoToDetail(id:number): void {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
