import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Image } from '../image';


@Component({
  selector: 'images-view-deals',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit {
  images: Image[];

  constructor() { }

  ngOnInit() {
   }
 

  onImagesSearch(images){
    this.images=images;
  }

}
