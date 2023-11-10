import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../../model/ToDoItem';


const BASE_URL = 'https://localhost:44309/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ToDoItem[]> {
    return this.httpClient.get<ToDoItem[]>(BASE_URL);
  }

  get(id: number): Observable<ToDoItem> {
    return this.httpClient.get<ToDoItem>(`${BASE_URL}/${id}`);
  }

  create(title: string, description: string): Observable<ToDoItem> {
    return this.httpClient.post<ToDoItem>(BASE_URL, {
      title: title,
      description: description,
      isDone: false
    });
  }

  delete(id: number): Observable<ToDoItem> {
    return this.httpClient.delete<ToDoItem>(`${BASE_URL}/${id}`);
  }


}
