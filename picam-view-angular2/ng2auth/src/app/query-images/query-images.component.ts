import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ImageQuery} from './imageQuery';
import {Image} from '../image';
import { ImagesService } from '../images.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-query-images',
  templateUrl: './query-images.component.html',
  styleUrls: ['./query-images.component.css']
})
export class QueryImagesComponent implements OnInit {
   imageQuery: ImageQuery = new ImageQuery(10, 1,false,false,new Date());
   images : Image[];
   imagesSub: Subscription;
   error: any;


  @Output() onImagesSearch= new EventEmitter<Image[]>();

  dateNow = new Date();
  options = [
    {id: 1, name: "1"},
    {id: 10, name: "10"},
    {id: 30, name: "30"},
    {id: "all", name: "all"}
  ];
  selectedValue = this.options[1];


  constructor(public imagesService: ImagesService) { }

  public onClickButton(): void {  // event will give you full breif of action
    this.imagesSub = this.imagesService
      .getImagesDatePaged(this.formatDate(this.imageQuery.date),this.imageQuery.page)
      .subscribe(
        images => this.images = images,
        err => error => this.error = err,
      // The 3rd callback handles the "complete" event.
      () => this.onImagesSearch.emit(this.images)
      );
    this.onImagesSearch.emit(this.images);

  }

  formatDate(date){
    alert(date);
    return date;//date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +  ("0" + date.getDate()).slice(-2);
  }

  ngOnInit() {
    this.imagesSub = this.imagesService
      .getImagesDatePaged(this.formatDate(new Date()),1)
      .subscribe(
        images => this.images = images,
        err => error => this.error = err
      );
  }

}
