import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image';
import { ImageQuery } from '../imageQuery';
import { ParametersImageQuery } from '../parametersImageQuery';

//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";


@Component({
  selector: 'app-image-displayer', 
  templateUrl: 'image-displayer.component.html',
  styleUrls: ['image-displayer.component.css']
})
export class ImageDisplayerComponent implements OnInit {
  @Input() images: Image[]; 
  @Input() imageQuery: ImageQuery;
  @Input() parametersImageQuery: ParametersImageQuery;
  

  p :number = 1;
  ngxImageGallery: NgxImageGalleryComponent;
  urlBackend : string = "http://hjbello.hopto.org:3333/image_recorded/"
  
  // gallery configuration
  conf: GALLERY_CONF = { 
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    inline :true
  };
    
  // gallery images
  imagesF: GALLERY_IMAGE[] = [ ];
 
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
        var record ={url:this.urlBackend+element.filename,
                    altText:element.filename}
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

