import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PProvideProvider {

  constructor() {
    console.log('Hello PProvideProvider Provider');
  }

  getDigit() {
    return 111;
  }

}
