import { Component } from '@angular/core';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(private formBuilder: FormBuilder){}

  todoForm = this.formBuilder.group({
    title:'',
    description:''
  })

  onSumbit(){
    const formValues = this.todoForm.value //.value get value in form

    console.log(formValues) //print value in form
  }
}
