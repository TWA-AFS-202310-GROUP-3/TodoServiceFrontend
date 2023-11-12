import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}

  todoItemURL = 'https://localhost:44309/ToDoItem'
  getAll(){
    return this.httpClient.get<ToDoItem[]>(this.todoItemURL);
  }

  create(title:string, description:string){
    return this.httpClient.post(this.todoItemURL ,{
      title:title,
      description:description,
      isDone:false
    })
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.todoItemURL}/${id}`);
  }

  update(id: number, todoItem:ToDoItem){
    return this.httpClient.put(`${this.todoItemURL}/${id}`, todoItem)
  }

  getById(id: number) {
    return this.httpClient.get<ToDoItem>(`${this.todoItemURL}/${id}`);
  }
}
