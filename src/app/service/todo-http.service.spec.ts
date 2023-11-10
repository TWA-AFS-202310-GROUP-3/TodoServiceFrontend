import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoHttpService } from './todo-http.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService',
  () => {
    let service: TodoHttpService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    const fakeItem1: ToDoItem = {
      'id': 0,
      'title': 'buy food',
      'description': 'buy lunch',
      'isDone': false
    };

    const fakeItem2: ToDoItem = {
      'id': 1,
      'title': 'buy drink',
      'description': 'buy some drink',
      'isDone': false
    };

    beforeEach(() => {
      //TestBed.configureTestingModule({});
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete', 'put']);
      //service = TestBed.inject(TodoHttpService);
      service = new TodoHttpService(httpClientSpy);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get all todo items when call getAll', () => {
      httpClientSpy.get.and.returnValue(asyncData(
        [fakeItem1, fakeItem2]
      ));
      service.getAll().subscribe(data =>
        expect(data.length).toEqual(2));
    });

    it('should get one todo items when call getItemById', () => {
      httpClientSpy.get.and.returnValue(asyncData(
        [fakeItem1]
      ));
      service.get(0).subscribe(data => {
        expect(data.id).toEqual(fakeItem1.id);
        expect(data.title).toEqual(fakeItem1.title);
        expect(data.description).toEqual(fakeItem1.description);
        expect(data.isDone).toEqual(fakeItem1.isDone);
      });
    });

    it('should create one todo items when call create', () => {
      httpClientSpy.post.and.returnValue(asyncData([fakeItem1]
      ));
      service.create('buy food', 'buy lunch').subscribe();
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

    it('should delete one todo items when call delete', () => {
      service.delete(0).subscribe();
      expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
    });
  });
