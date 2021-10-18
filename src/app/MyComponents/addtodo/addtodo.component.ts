import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter;
  title: string | undefined;
  desc: string | undefined;
  active:boolean |undefined;

  constructor() { 

  }

  ngOnInit(): void {
  }
  onAdd(){
    const todo = {
    sno:1,
    title: this.title,
    desc: this.desc,
    active:true
    }
    this.todoAdd.emit(todo);
  }
}
