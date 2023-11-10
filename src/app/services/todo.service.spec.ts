import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: 'buy milk',
        description: 'buy one bottle of milk',
        isDone: false,
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const items = service.getAll();

    expect(items).toEqual([    {
      id: 1,
      title: 'buy milk',
      description: 'buy one bottle of milk',
      isDone: false,
    }])
  })

  it('should create new item when call creat', () => {
    service.create('buy bread', 'buy one basket of bread');

    const items = service.getAll()
    expect(items[1]).toEqual({
      id: 2,
      title: 'buy bread',
      description: 'buy one basket of bread',
      isDone: false,
    })
  })

  it('shoud turn the isDone value into true when call makeDone', () => {

    service.markDone(1);
    const item = service.getAll()[0];
    expect(item.isDone).toBeTrue
  })
});
