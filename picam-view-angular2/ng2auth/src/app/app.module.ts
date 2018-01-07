import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesViewComponent } from './images-view/images-view.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { ImagesService } from './images.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageDisplayerComponent } from './image-displayer/image-displayer.component';
import { QueryImagesComponent } from './query-images/query-images.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesViewComponent,
    CallbackComponent,
    ImageDisplayerComponent,
    QueryImagesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
