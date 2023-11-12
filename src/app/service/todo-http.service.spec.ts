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
  const mockItem = {
    id: 0,
    title: 'Home work',
    description: 'Have to complete home work',
    isDone: false,
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','put','post','delete']);
    service = new TodoHttpService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData([mockItem]));

    service.getAll().subscribe(data=>{
      expect(data.length).toEqual(1)
      expect(data[0].title).toEqual('Home work');
      expect(data[0].description).toEqual('Have to complete home work');
      expect(data[0].isDone).toEqual(false);
    })

    expect(httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('should delete item when call delete',() =>{
    httpClientSpy.delete.and.returnValue(asyncData({}));

    service.delete(0).subscribe();
    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should update item when call update',() =>{
    const updatedItem = {
      id: 0,
      title: 'Updated Title',
      description: 'Updated Description',
      isDone: true,
    };
    httpClientSpy.put.and.returnValue(asyncData(updatedItem));

    service.update(0,updatedItem).subscribe(data => {
      expect(data).toEqual(updatedItem);
    });
    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should get item by ID when call getById', () => {
    const mockedId = mockItem.id
    httpClientSpy.get.and.returnValue(asyncData(mockItem));

    service.getById(mockedId).subscribe((data) => {
      expect(data).toEqual(mockItem);
    });
    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should create a new item when call create', () => {
    const newItem = {
      title: 'New Title',
      description: 'New Description',
      isDone: false,
    };
    httpClientSpy.post.and.returnValue(asyncData(newItem));
  
    service.create(newItem.title, newItem.description).subscribe((data) => {
      expect(data).toEqual(newItem);
    });
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });
});
