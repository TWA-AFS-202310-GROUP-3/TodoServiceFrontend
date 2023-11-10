import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      //准备测试数据
      {
        id: 2,
        title: 'buy bread',
        description: 'buy some bread',
        isDone: false,
      }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', ()=>{
    const items = service.getAll()

    expect(items).toEqual([
      {
        id: 2,
        title: 'buy bread',
        description: 'buy some bread',
        isDone: false,
      }
    ]);
  })
});
