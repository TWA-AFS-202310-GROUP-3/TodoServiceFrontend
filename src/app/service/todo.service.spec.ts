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
        title: 'xianke',
        description: 'csgo',
        isDone: false
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const item = service.getAll()
    expect(item).toEqual([{
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
    }]);
  });

  it('should create when call create', () => {
    const title = 'crazy'
    const description = 'csgo'
    const item = service.create(title, description)
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'xianke',
        description: 'csgo',
        isDone: false
      },
      {
        id: 2,
        title: 'crazy',
        description: 'csgo',
        isDone: false
      }
    ]);
  });
});
