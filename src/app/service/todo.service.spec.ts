import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      { id: 1, title: 'hi', description: 'sayhi', isDone: false },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const items = service.getAll();
    expect(items).toEqual([
      { id: 1, title: 'hi', description: 'sayhi', isDone: false },
    ]);
  });

  it('should create item when call create', () => {
    service.create('test', 'test');
    expect(service.items).toEqual([
      { id: 1, title: 'hi', description: 'sayhi', isDone: false },
      { id: 2, title: 'test', description: 'test', isDone: false },
    ]);
  });

  it('should markDone current item when call markDone', () => {
    service.markDone(1);
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'hi',
        description: 'sayhi',
        isDone: true,
      },
    ]);
  });
});
