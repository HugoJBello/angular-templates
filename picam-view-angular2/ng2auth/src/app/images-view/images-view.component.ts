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
  error: any;

  constructor(public imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesSub = this.imagesService
      .getPrivateDeals()
      .subscribe(
        images => this.images = images,
        err => error => this.error = err
      );
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }

}
