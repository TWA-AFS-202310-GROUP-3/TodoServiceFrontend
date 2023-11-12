import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return this.httpClient.get<ToDoItem[]>(`https://localhost:44309/ToDoItems`);
  }

  create(title: string, description: string) {
    return this.httpClient.post(`https://localhost:44309/ToDoItems`, {
      title: title,
      description: description,
      isDone: false,
    });
  }

  delete(id: string) {
    return this.httpClient.delete<ToDoItem>(`https://localhost:44309/ToDoItems/${id}`);
  }
}
