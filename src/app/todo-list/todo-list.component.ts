import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../services/todo-http.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];

  constructor(
    private todoService : TodoService, 
    private router : Router,
    private http : TodoHttpService
    ){}

  ngOnInit() {
    this.http.getAll().subscribe(res => {
      this.items = res
    });
  }

  onMarkDone(id : number){
    this.todoService.markDone(id)
  }

  onGoToDetail(id : number){
    this.router.navigateByUrl(`/detail/${id}`);
  }


}
