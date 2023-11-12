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
  const mockId = 1;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post','put','delete'])
    service = new TodoHttpService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([expectedResponse])
    )

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })

    expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

  it('should create a todo item and return the created when call create', () => {
    
    const url = 'https://localhost:44309/ToDoItem'

    httpClientSpy.post.and.returnValue(asyncData(postItem))

    service.create(postItem).subscribe(res => {
      expect(res).toEqual(expectedResponse)
    })
    expect(httpClientSpy.post).toHaveBeenCalledWith(url, postItem)
    
  })

  it('should return item by ID when call getById given id', () => {

    httpClientSpy.get.and.returnValue(asyncData(expectedResponse))

    service.getById(mockId).subscribe(res => {
      expect(res).toEqual(expectedResponse)
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

  it('should return deleted item when call delete given id', () => {
    httpClientSpy.delete.and.returnValue(asyncData(expectedResponse))

    service.delete(mockId).subscribe(res => {
      expect(res).toEqual(expectedResponse)
    })
    expect(httpClientSpy.delete).toHaveBeenCalled()
  })

  it('should return the updated item when call update given id and new item', () => {
    const url = `https://localhost:44309/ToDoItem/${mockId}`

    httpClientSpy.put.and.returnValue(asyncData(postItem))

    service.update(mockId, postItem).subscribe(res => {
      expect(res).toEqual(expectedResponse)
    })
    expect(httpClientSpy.put).toHaveBeenCalledWith(url, postItem)
    
  })

  
});
