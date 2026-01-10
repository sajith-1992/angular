import { inject, Injectable } from '@angular/core';
import { todo} from '../model/todos.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Todoss {
  http = inject(HttpClient);

  gettodosapi(){
   const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todo>>(url)
  }
}
