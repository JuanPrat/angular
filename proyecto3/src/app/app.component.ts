import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value1: number;
  value2: number;
  value3: number;
  result: string;

  constructor(){
    this.value1 = this.returnAleatory();
    this.value2 = this.returnAleatory();
    this.value3 = this.returnAleatory();
  }
  
  returnAleatory(){
    return Math.trunc(Math.random() * 6)+1;
  }

  play() {
    this.value1 = this.returnAleatory();
    this.value2 = this.returnAleatory();
    this.value3 = this.returnAleatory();
    if (this.value1==this.value2 && this.value1==this.value3)    
      this.result='Ganó';
    else
      this.result='Perdió';
  }
}
