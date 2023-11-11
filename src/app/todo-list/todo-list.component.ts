import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
// import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = []

  constructor(
    private router: Router,
    private todoHttpService: TodoHttpService){}

  ngOnInit(){
    //this.items = this.todoService.getAll()
    this.refreshList()
  }

  refreshList(){
    this.todoHttpService.getAll().subscribe(todoItems => {
      this.items = todoItems
    })
  }

  onMarkDone(id: number){
    //this.todoService.markDone(id)
    let searchItem = this.items.find(_ => _.id === id)
    if(searchItem){
      searchItem.isDone = true
      this.todoHttpService.updateItem(searchItem).subscribe(() => this.refreshList())
    }
  }
  
  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }

  onDelete(id: number){
    this.todoHttpService.deleteItem(id).subscribe(() => this.refreshList())
  }
}
