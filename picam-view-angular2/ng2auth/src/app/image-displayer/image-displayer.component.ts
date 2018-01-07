import { Component, OnInit, Input  } from '@angular/core';
import { Image } from '../image';
@Component({
  selector: 'app-image-displayer',
  templateUrl: 'image-displayer.component.html',
  styleUrls: ['image-displayer.component.css']
})
export class ImageDisplayerComponent implements OnInit {
  @Input() images: Image[];

  constructor() {
    
   }

  ngOnInit() {
  }

}
