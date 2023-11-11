import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {

  item: ToDoItem | undefined

  constructor(private activatedRoute: ActivatedRoute,
    private todoService: TodoService, 
    private todoHttpService: TodoHttpService){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('detailId')
    //this.item = this.todoService.getItemById(Number(id))
    this.todoHttpService.getItemById(Number(id)).subscribe((item) => {
      this.item = item
    })
  }
}
