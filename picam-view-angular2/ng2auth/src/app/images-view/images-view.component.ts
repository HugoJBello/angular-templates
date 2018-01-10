import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagesService } from '../images.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Image } from '../image';


@Component({
  selector: 'images-view-deals',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit, OnDestroy {
  imagesSub: Subscription;
  images: Image[];
  numberImages:number = 1;
  date:Date = new Date();
  error: any;

  constructor(public imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesSub = this.imagesService
      .getImagesDatePaged(this.formatDate(this.date),this.numberImages)
      .subscribe(
        images => this.images = images,
        err => error => this.error = err
      );
  }
  formatDate(date){
    return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +  ("0" + date.getDate()).slice(-2);
  }

  onChangeNumberImages(numberImages){
    this.numberImages=numberImages;
    console.log("...... images " + this.numberImages);
  }
  onChangeDate(date){
    this.date=date;
    console.log("...... date " + this.date);
  }

  onSubmit(){
    console.log("'¡'¡¡¡¡¡¡'¡¡'¡¡''¡''¡");
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }

}
