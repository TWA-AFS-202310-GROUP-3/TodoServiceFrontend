import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
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
    private router: Router,
    private todoHttpService: TodoHttpService
  ) {}
  ngOnInit() {
    
    this.refreshList()
  }

  refreshList(){
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });

  }
  onMarkDone(id: number) {
    const item = this.items.find(item => item.id === id)
    if (item) {
      item.isDone = true;
      this.todoHttpService.update(id, item).subscribe(() => {
        this.refreshList()
      })
    }
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onDelete(id:number){
    this.todoHttpService.delete(id).subscribe(()=>{
      this.refreshList()
    })
  }
  
}
