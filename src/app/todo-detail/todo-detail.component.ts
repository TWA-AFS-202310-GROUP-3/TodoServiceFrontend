import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private todoHttpService: TodoHttpService
  ) {}

  todoForm = this.formBuilder.group({
    id:0,
    title: '',
    description: '',
    isDone: false
  });

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    console.log(id);
    this.todoHttpService.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
      console.log('init', item.isDone);
      this.todoForm.setValue({
        id: item.id,
        title: item.title,
        description: item.description,
        isDone: item.isDone
      })
    });
    
    /*##路由里拿出的都是string或者undefined */
  }
  onUpdate() {
    const formValues = this.todoForm.value;
    if (this.item && formValues.title && formValues.description) {
      console.log('update', this.item.isDone);
      this.item.title = formValues.title;
      this.item.description = formValues.description;
      this.todoHttpService.update(this.item.id, this.item).subscribe();
    }
  }
}
