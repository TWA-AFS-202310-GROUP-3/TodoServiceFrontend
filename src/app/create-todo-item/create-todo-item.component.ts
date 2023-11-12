import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoHttpService } from '../services/todo-http.service';
import { ToDoItem } from 'src/model/ToDoItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css'],
})
export class CreateTodoItemComponent implements OnDestroy {
  @Output() created = new EventEmitter();
  subscription : Subscription | undefined
  constructor(
    private formBuilder: FormBuilder, 
    private todoHttpService : TodoHttpService
    ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

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
      this.subscription = this.todoHttpService.create(item).subscribe(() => {
        this.todoForm.reset()
        this.created.emit()
      })
    }
  }
}
