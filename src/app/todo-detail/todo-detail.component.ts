import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private activatedRouter: ActivatedRoute,
    private todoService: TodoService
  ) {}
  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    console.log(id);
    this.item = this.todoService.getItemById(
      Number(id)
    ); /*路由里拿出的都是string或者undefined */
  }
}
