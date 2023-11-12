import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../services/todo-http.service';
import { Subscribable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnDestroy{
  
  item : ToDoItem | undefined
  item_id = ''
  item_title = ''
  item_description = ''
  item_isDone = false
  subscriptionGet : Subscription | undefined
  subscriptionUpdate : Subscription | undefined
  constructor(private activatedRouter: ActivatedRoute, private http : TodoHttpService){
  }

  ngOnInit(){
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id) {
      this.subscriptionGet = this.http.getById(Number(id)).subscribe(res => {
        this.item = res
        this.item_title = res.title
        this.item_description = res.description
        this.item_id = res.id.toString()
        this.item_isDone = res.isDone
      })
    }
    
  }

  onSave(){
    const updatedItem : ToDoItem = {
      id : Number(this.item_id),
      title : this.item_title,
      description : this.item_description,
      isDone : this.item_isDone
    }
    this.subscriptionUpdate = this.http.update(Number(this.item_id), updatedItem).subscribe(res => {
      console.log("updated successfully!")
    });
  }

  ngOnDestroy(): void {
    this.subscriptionUpdate?.unsubscribe();
    this.subscriptionGet?.unsubscribe();
  }
}
