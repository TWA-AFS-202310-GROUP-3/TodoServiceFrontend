import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  todoForm = this.fb.group({
    title: "",
    description: ""
  });

  constructor(private fb: FormBuilder, private todoService: TodoService) {
  }

  onSubmit(): void {
    const formValue = this.todoForm.value;
    if (formValue.title && formValue.description) {
      this.todoService.create(formValue.title, formValue.description);
      this.todoForm.reset();
    }
  }
}

