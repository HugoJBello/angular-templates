import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {TabModule} from 'angular-tabs-component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesViewComponent } from './images-view/images-view.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { ImagesService } from './images.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageDisplayerComponent } from './image-displayer/image-displayer.component';
import { QueryImagesComponent } from './query-images/query-images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageCustomGalleryComponent } from './image-custom-gallery/image-custom-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesViewComponent,
    CallbackComponent,
    ImageDisplayerComponent,
    QueryImagesComponent,
    ImageCustomGalleryComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxGalleryModule,
    NgxImageGalleryModule,
    TabModule,
    NgxPaginationModule
    ],
  providers: [
    AuthService,
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
