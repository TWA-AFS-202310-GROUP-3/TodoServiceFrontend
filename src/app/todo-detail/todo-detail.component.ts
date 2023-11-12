import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item: ToDoItem | undefined //可以没有初始值，所以undifined
  constructor(private activatedRouter:ActivatedRoute,
    private TodoService:TodoService){}

  ngOnInit(){
    const id = this.activatedRouter.snapshot.paramMap.get('detailId') //get id from url
    this.item = this.TodoService.getItemById(Number(id))
  }

  onUpdate(){
    
  }
}
