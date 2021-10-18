import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  constructor() { 
  }

  ngOnInit(): void {
  }
  Delete(todo:Todo){
    console.log("Todos");
    this.todoDelete.emit(todo);
    console.log("Delete event is triggered");
   
  }

}
