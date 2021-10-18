import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string | null
  constructor() {

    this.localItem = localStorage.getItem("Todos");
    if (this.localItem !=null) {
      this.todos = JSON.parse(this.localItem);
      
    }
    else{
      this.todos = [];
    }
    
  }


  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }
  todoAdd(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }
}
