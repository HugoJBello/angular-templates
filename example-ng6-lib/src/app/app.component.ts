import { Component, OnInit } from '@angular/core';
import {ExampleNg6LibService} from 'example-ng6-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public exampleService: ExampleNg6LibService) { }

  ngOnInit() {
    console.log(this.exampleService.testFunction());
  }
}
