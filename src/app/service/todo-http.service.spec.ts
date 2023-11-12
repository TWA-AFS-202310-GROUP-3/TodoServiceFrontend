import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { defer } from 'rxjs/internal/observable/defer';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data)); //???????
}
describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>; //声明一个要测的object

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );
    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
    });
    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should get an item when call getItemById', () => {
    const item = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };
    httpClientSpy.get.and.returnValue(asyncData(item));
    service.getItemById(0).subscribe((data) => {
      expect(data).toBe(item);
    });
  });

  it('should create todoitem when call create', () => {
    const item = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };
    httpClientSpy.post.and.returnValue(asyncData(item));
    service.create('Home work', 'Have to complete home work').subscribe();
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete an item when call deleteItem', () => {
    const item = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };
    httpClientSpy.delete.and.returnValue(asyncData(item));
    service.delete(0).subscribe((data) => {
      expect(data).toEqual(item);
    });
    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should update todoitem when call updateItem', () => {
    const item = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };
    httpClientSpy.put.and.returnValue(asyncData(item));
    service.update(0, {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    });
    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });
});
