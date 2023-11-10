import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { TodoHttpService } from './todo-http.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService',
  () => {
    let service: TodoHttpService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
      //TestBed.configureTestingModule({});
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      //service = TestBed.inject(TodoHttpService);
      service = new TodoHttpService(httpClientSpy);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get all todo items when call getAll', () => {
      httpClientSpy.get.and.returnValue(asyncData(
        [{
          'id': 0,
          'title': 'string',
          'description': 'string',
          'isDone': true
        }]
      ));
      service.getAll().subscribe(data =>
        expect(data.length).toEqual(1));
    });
  });
