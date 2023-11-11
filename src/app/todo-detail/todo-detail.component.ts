import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../services/todo-http.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item : ToDoItem | undefined
  subscription : Subscription | undefined
  constructor(private activatedRouter: ActivatedRoute, private http : TodoHttpService){
  }

  ngOnInit(){
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id) {
      this.subscription = this.http.getById(id).subscribe(res => {
        this.item = res
      })
    }
    
  }
}
