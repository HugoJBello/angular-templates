import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image';
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";


@Component({
  selector: 'app-image-displayer',
  templateUrl: 'image-displayer.component.html',
  styleUrls: ['image-displayer.component.css']
})
export class ImageDisplayerComponent implements OnInit {
  @Input() images: Image[];
  ngxImageGallery: NgxImageGalleryComponent;
  urlBackend : string = "http://localhost:3333/image_recorded/"
  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    inline :true
  };
    
  // gallery images
  imagesF: GALLERY_IMAGE[] = [
    {
      url: "http://localhost:3333/image_recorded/1.jpeg"
    },
    {
      url: "http://localhost:3333/image_recorded/1.jpeg", 
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
      extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
    },
  ];
 
  constructor(){
    

  }
 
  ngOnInit(){

  }
  ngOnChanges() {
    this.imagesF = [];
    if (this.images){
    if (this.images.length>0){
     this.images.forEach(element => {
       console.log(element.path);
        var record ={url:this.urlBackend+element.filename}
        this.imagesF.push(record);
      });
    }}
  }
    
  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
    
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
    
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
    

    
  /**************************************************/
    
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }
 
  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }
 
  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }
  
  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }
 
  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }
}

