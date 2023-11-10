import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  item: ToDoItem | undefined = undefined;

  constructor(private activatedRouter: ActivatedRoute, private todoService: TodoHttpService) {
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    this.todoService.get(Number(id)).subscribe(item => this.item = item);
  }
}
