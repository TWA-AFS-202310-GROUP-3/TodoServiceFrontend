import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item : ToDoItem | undefined
  constructor(private activatedRouter: ActivatedRoute, private service : TodoService){
  }

  ngOnInit(){
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.item = this.service.getItemById(Number(id))
  }
}
