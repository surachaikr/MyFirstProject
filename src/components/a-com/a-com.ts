import { Component } from '@angular/core';

@Component({
  selector: 'a-com',
  templateUrl: 'a-com.html'
})
export class AComComponent {

  text: string;

  constructor() {
    console.log('Hello AComComponent Component');
    this.text = 'Hello World';
  }

}
