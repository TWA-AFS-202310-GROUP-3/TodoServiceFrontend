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

  create() {
    return this.http.post('https://localhost:44309/ToDoItem', {
      id: 1,
      title: 'buy bread',
      description: 'buy one basket of bread',
      isDone: false,
    });
  }

  getById(id : string){
    return this.http.get<ToDoItem>(`https://localhost:44309/ToDoItem/${id}`)
  }

  delete(id : number) {
    return this.http.delete(`https://localhost:44309/ToDoItem/${id}`);
  }

  
}
