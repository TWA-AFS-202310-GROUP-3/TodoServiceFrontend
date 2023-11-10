import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSumbit() {
    const formValues = this.todoForm.value; //.value get value in form
    if (formValues.title && formValues.description) {
      //if both title and des have value
      this.todoService.create(formValues.title, formValues.description);
    }
    this.todoForm.reset()
    //console.log(formValues); //print value in log in F12
  }
}
