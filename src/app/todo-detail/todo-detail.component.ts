import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private activatedRouter: ActivatedRoute,
    private todoHttpService: TodoHttpService
  ) {}
  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    console.log(id);
    this.todoHttpService.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
    });
    /*路由里拿出的都是string或者undefined */
  }
}
