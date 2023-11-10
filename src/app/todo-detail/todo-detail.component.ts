import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  item: ToDoItem | undefined = undefined;

  constructor(private activatedRouter: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    this.item = this.todoService.getItemById(Number(id));
  }
}
