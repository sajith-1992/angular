import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterval = signal(0);
  inc(){
    this.counterval.update(v=>v+1)
  }

  dec(){
    this.counterval.update(v=>v-1)
  }
  res(){
    this.counterval.set(0)
  }
}
