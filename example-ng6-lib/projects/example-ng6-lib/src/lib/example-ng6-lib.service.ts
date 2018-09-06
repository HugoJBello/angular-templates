import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleNg6LibService {

  constructor() { }

  public testFunction() {
    console.log('foo');
    return 'foo';
  }
}
