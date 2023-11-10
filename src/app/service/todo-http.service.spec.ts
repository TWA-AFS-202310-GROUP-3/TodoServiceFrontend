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
    const fakeItem: ToDoItem = {
      'id': 0,
      'title': 'buy food',
      'description': 'buy lunch',
      'isDone': false
    };

    beforeEach(() => {
      //TestBed.configureTestingModule({});
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
      //service = TestBed.inject(TodoHttpService);
      service = new TodoHttpService(httpClientSpy);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get all todo items when call getAll', () => {
      httpClientSpy.get.and.returnValue(asyncData(
        [fakeItem]
      ));
      service.getAll().subscribe(data =>
        expect(data.length).toEqual(1));
    });

    it('should create one todo items when call create', () => {
      httpClientSpy.post.and.returnValue(asyncData([fakeItem]
      ));
      service.create("buy food", "buy lunch").subscribe(data =>{
        expect(data.id).toEqual(fakeItem.id);
        expect(data.title).toEqual(fakeItem.title);
        expect(data.description).toEqual(fakeItem.description);
        expect(data.isDone).toEqual(fakeItem.isDone);
      })
    });
  });
