import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<ToDoItem[]> {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItem')
  }
}
