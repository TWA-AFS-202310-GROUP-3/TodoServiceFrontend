import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  public currentId: number | undefined;
  constructor(
    private activatedRouter: ActivatedRoute,
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    if (id != null) {
      this.todoHttpService.getItemById(id).subscribe((todoItem) => {
        this.item = todoItem;
        this.currentId = Number(id);
      });
    }
  }

  onUpdate() {
    if (this.item) {
      this.todoHttpService
        .updateCurrentItem(this.currentId!, this.item)
        .subscribe((todoItem) => {
          this.item = todoItem;
          this.router.navigateByUrl('');
        });
    }
  }
}
