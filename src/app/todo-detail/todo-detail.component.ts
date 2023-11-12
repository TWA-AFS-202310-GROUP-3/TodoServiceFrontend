import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item: ToDoItem | undefined
  itemId:number | undefined
  itemTitle:string | undefined
  itemDescription:string | undefined
  itemDone:boolean | undefined

  constructor(private activatedRouter:ActivatedRoute,
    private router: Router,
    private todoHttpService: TodoHttpService){}

  ngOnInit(){
    const id = this.activatedRouter.snapshot.paramMap.get('detailId')
    this.todoHttpService.getById(Number(id)).subscribe((todoItem) => {
      this.item = todoItem
      this.itemId = todoItem.id
      this.itemTitle = todoItem.title
      this.itemDescription = todoItem.description
      this.itemDone = todoItem.isDone
    })
    
  }

  onUpdate(){
    const updatedItem: ToDoItem = {
      id: this.itemId!,
      description: this.itemDescription!,
      title: this.itemTitle!,
      isDone: this.itemDone!,
    }
    this.todoHttpService.update(updatedItem.id, updatedItem).subscribe(()=>{
      this.router.navigateByUrl('');
    })
  }
}
