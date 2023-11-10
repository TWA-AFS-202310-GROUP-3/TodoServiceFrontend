import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  todoForm = this.fb.group({
    title: '',
    description: ''
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    const formValue = this.todoForm.value;
    console.log(formValue);
  }
}

