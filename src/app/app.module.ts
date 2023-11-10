import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTodoComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule    /*引入响应式 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
