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
    const item = this.items.find(item => item.id === id)
    if (item) {
      item.isDone = true;
      this.http.update(id, item).subscribe(res => {
        this.onRreshList()
      })
    }
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

  trackItem(index : number, item : ToDoItem){
    return item.id
  }
}
