import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagesService } from '../images.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Image } from '../image';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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
