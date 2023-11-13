import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../services/todo-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  subscriptionMarkDone : Subscription | undefined;
  subscriptionRefresh: Subscription | undefined;
  subscriptionDelete: Subscription | undefined;

  constructor(
    private router : Router,
    private http : TodoHttpService
    ){}

  ngOnInit() {
    this.onRefreshList();
  }

  onMarkDone(id : number){
    const item = this.items.find(item => item.id === id)
    if (item) {
      item.isDone = true;
      this.subscriptionMarkDone = this.http.update(id, item).subscribe(res => {
        this.onRefreshList()
      })
    }
  }

  onGoToDetail(id : number){
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onRefreshList(){
    this.subscriptionRefresh = this.http.getAll().subscribe(res => {
      this.items = res
    });
  }

  onDelete(id : number) {
    this.subscriptionDelete = this.http.delete(id).subscribe(res => {
      this.onRefreshList();
    });
  }

  trackItem(index : number, item : ToDoItem){
    return item.id
  }

  ngOnDestroy(): void {
    this.subscriptionDelete?.unsubscribe();
    this.subscriptionRefresh?.unsubscribe();
    this.subscriptionMarkDone?.unsubscribe();
  }
}
