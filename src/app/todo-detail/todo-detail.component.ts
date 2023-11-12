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
    if (id != null) {
      this.todoHttpService.getItemById(id).subscribe((todoItem) => {
        this.item = todoItem;
      });
    }
    console.log(id);
  }
}
