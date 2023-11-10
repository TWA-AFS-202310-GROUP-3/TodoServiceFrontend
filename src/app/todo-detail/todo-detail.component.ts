import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  todoItemForm = this.fb.group({
    id: 0,
    title: '',
    description: '',
    isDone: false
  });

  constructor(private activatedRouter: ActivatedRoute, private todoService: TodoHttpService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    this.todoService.get(Number(id)).subscribe(item => {
      this.item = item;
      console.log('init', item.isDone);
      this.todoItemForm.setValue({
        id: item.id,
        title: item.title,
        description: item.description,
        isDone: item.isDone
      });
    });
  }

  onUpdate(): void {
    const formValue = this.todoItemForm.value;
    if (formValue.title && formValue.description && this.item) {
      console.log('update', this.item.isDone);
      this.item.title = formValue.title;
      this.item.description = formValue.description;
      this.todoService.update(this.item.id, this.item).subscribe(() => {
      });
    }
  }
}
