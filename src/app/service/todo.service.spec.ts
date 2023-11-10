import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.todoItems = [{
      id: 1,
      title: 'buy milk',
      description: 'buy some milk',
      isDone: false
    }];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const items = service.getAll();
    expect(service.todoItems).toEqual(items);
  });

  it('shoule create new item when call createItem', () => {
    service.createItem("buy bubble tea",'buy some bubble tea')
    expect(service.todoItems[1]).toEqual({
      id:2,
      title: "buy bubble tea",
      description:'buy some bubble tea',
      isDone:false
    });
  });

  it('should set isDone to true when markDone given id', () => {
    service.markDone(1);
    expect(service.todoItems[0].isDone).toBeTrue();
  });

  it('should get item when getItemById given valid', () => {
    service.getItemById(1);
    expect(service.todoItems[0]).toEqual({
      id: 1,
      title: 'buy milk',
      description: 'buy some milk',
      isDone: false
    })
  });
});
