import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
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
    private router : Router,
    private http : TodoHttpService
    ){}

  ngOnInit() {
    this.onRreshList();
  }

  onMarkDone(id : number){
    throw new Error("Method not implemented.");
  }

  onGoToDetail(id : number){
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onRreshList(){
    this.http.getAll().subscribe(res => {
      this.items = res
    });
  }

  onDelete(id : number) {
    this.http.delete(id).subscribe(res => {
      this.onRreshList();
    });
  }
}
