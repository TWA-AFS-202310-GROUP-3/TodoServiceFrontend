import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data : T){
  return defer(() => Promise.resolve(data))
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    
  });

  it('should be created', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new TodoHttpService(httpClientSpy)
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new TodoHttpService(httpClientSpy)
    httpClientSpy.get.and.returnValue(
      asyncData([{
      id: 1,
      title: "buy milk",
      description : "buy a bottle of milk",
      isDone: false
    }])
    )

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })

    expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

  it('should create a todo item and return the created when call create', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new TodoHttpService(httpClientSpy)
    const postItem = {
      id: 1,
      title: "buy milk",
      description : "buy a bottle of milk",
      isDone: false
    }
    const expectedResponse = {
      id: 1,
      title: "buy milk",
      description : "buy a bottle of milk",
      isDone: false
    }
    const url = 'https://localhost:44309/ToDoItem'

    httpClientSpy.post.and.returnValue(asyncData([postItem]))

    service.create(postItem).subscribe(res => {
      expect(res).toEqual(expectedResponse)
    })
    expect(httpClientSpy.post).toHaveBeenCalledWith(url, postItem)
    
  })

  
});
