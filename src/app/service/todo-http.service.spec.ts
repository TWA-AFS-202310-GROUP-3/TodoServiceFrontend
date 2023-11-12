import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    // service = TestBed.inject(TodoHttpService);
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

  it('should create a new item and return it when call create', () => {
    httpClientSpy.post.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );
    service.create('new item', 'test case').subscribe((data) => {
      expect(data[0]).toEqual({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      });
    });
  });

  it('should get correct item when call getItemById', () => {
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
    service.getItemById(0).subscribe((data) => {
      expect(data.id).toEqual(0);
      expect(data.title).toEqual('Home work');
      expect(data.description).toEqual('Have to complete home work');
      expect(data.isDone).toEqual(false);
    });
  });
});
