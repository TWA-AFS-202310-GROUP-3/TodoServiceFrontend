import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = []

  constructor(private todoService: TodoService,
    private router: Router){}

  ngOnInit(){
    this.items = this.todoService.getAll()
  }

  onMarkDone(id: number){
    this.todoService.markDone(id)
  }
  
  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }
}
