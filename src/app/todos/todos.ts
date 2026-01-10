import { Component, inject, OnInit, signal } from '@angular/core';
import { Todoss } from '../services/todos';
import { todo } from '../model/todos.type';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
}) 
export class Todos implements OnInit {
  todoservice=inject(Todoss);
  todolist=signal<Array<todo>>([]);
  
ngOnInit(): void {
  this.todoservice. gettodosapi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      
      })
    )
    .subscribe((todos) => {
      this.todolist.set(todos);
    });
}
}