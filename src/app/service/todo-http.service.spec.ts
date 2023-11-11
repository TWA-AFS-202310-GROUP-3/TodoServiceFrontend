import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import {defer} from 'rxjs';

function asyncData<T>(data: T){
  return defer(() => Promise.resolve(data))
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete'])
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]))

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)

  });

  it('should create todoitem when call create', () => {
    httpClientSpy.post.and.returnValue(asyncData([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]))
    service.create('xianke', 'csgo').subscribe()
    expect(httpClientSpy.post.calls.count()).toEqual(1)
  });

  it('should update todoitem when call updateItem', () => {
    httpClientSpy.put.and.returnValue(asyncData([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]))
    service.updateItem({
      id: 1,
      title: 'xianke',
      description: 'csgo',
      isDone: false
    })
    expect(httpClientSpy.put.calls.count()).toEqual(1)
  });

  it('should return todoitem when call getItemById', () => {
    httpClientSpy.get.and.returnValue(asyncData([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]))
    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('should delete todo item when call deleteItem', () => {
    httpClientSpy.delete.and.returnValue(asyncData([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]))
    service.deleteItem(0)
    expect(httpClientSpy.delete.calls.count()).toEqual(1)
  });
});
