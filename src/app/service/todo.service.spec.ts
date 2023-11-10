import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  /*beforeEach作用：在每次测试之前都跑一遍这些代码。 */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll()', () => {
    const items = service.getAll();
    expect(items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
    ]);
  });

  it('should create new item when call create()', () => {
    service.create('buy bread', 'buy some bread');

    expect(service.items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
      {
        id: 2,
        title: 'buy bread',
        description: 'buy some bread',
        isDone: false,
      },
    ]);
  });

  it('should mark item as done when call markDone()', () => {
    service.markDone(1);
    expect(service.items[0].isDone).toEqual(true);
  });
});
