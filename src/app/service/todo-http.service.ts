import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItem');
  }

  create(title: string, description: string) {
    return this.httpClient.post<ToDoItem[]>(
      'https://localhost:44309/ToDoItem',
      {
        title: title,
        description: description,
        isDone: false,
      }
    );
  }

  getItemById(id: string) {
    return this.httpClient.get<ToDoItem>(
      `https://localhost:44309/ToDoItem/${id}`
    );
  }

  deleteItemById(id: number) {
    return this.httpClient.delete(`https://localhost:44309/ToDoItem/${id}`);
  }

  updateCurrentItem(id: number, item: ToDoItem) {
    return this.httpClient.put<ToDoItem>(
      `https://localhost:44309/ToDoItem/${id}`,
      item
    );
  }
}
