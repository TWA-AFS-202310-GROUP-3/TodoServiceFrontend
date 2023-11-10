import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<ToDoItem[]>('https://localhost:44309/ToDoItem')
  }
}
