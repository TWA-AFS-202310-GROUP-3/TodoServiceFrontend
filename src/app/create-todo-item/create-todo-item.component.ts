import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoHttpService } from '../services/todo-http.service';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css'],
})
export class CreateTodoItemComponent {
  @Output() created = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder, 
    private todoHttpService : TodoHttpService
    ) {}

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.title && formValues.description){
      const item : ToDoItem = {
        id : 0,
        title : formValues.title,
        description : formValues.description,
        isDone : false
      }
      this.todoHttpService.create(item).subscribe(() => {
        this.todoForm.reset()
        this.created.emit()
      })
    }
    console.log(formValues);
  }
}
