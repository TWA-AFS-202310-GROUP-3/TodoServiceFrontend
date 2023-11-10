import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo-http.service';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  @Output() created = new EventEmitter();
  todoForm = this.fb.group({
    title: '',
    description: ''
  });

  constructor(private fb: FormBuilder, private httpService: TodoHttpService) {
  }

  onSubmit(): void {
    const formValue = this.todoForm.value;
    if (formValue.title && formValue.description) {
      this.httpService.create(formValue.title, formValue.description).subscribe(() => {
        this.todoForm.reset();
        this.created.emit();
      });
    }
  }
}

