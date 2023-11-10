import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];

  constructor(
    //constructor将需要用的属性加进来
    //注入todoService
    private todoService: TodoService,
    private router:Router
  ) {}
  ngOnInit() {
    //在组建load（初始化）时调用
    this.items = this.todoService.getAll(); //get all items in todoService
  }

  onMarkDone(id: number) {
    //on开头因为是响应事件
    this.todoService.markDone(id);
  }

  onGoToDetail(id:number){
    this.router.navigateByUrl(`/detail/${id}`) //use router to direct url
    //need to use `` instead of '',otherwise will recognise id just as id
  }
}
