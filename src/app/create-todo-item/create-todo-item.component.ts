import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css'],
})
export class CreateTodoItemComponent {
  constructor(private formBuilder: FormBuilder, private todoService : TodoService) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.title && formValues.description){
      this.todoService.create(formValues.title, formValues.description)
    }
    console.log(formValues);
  }
}
