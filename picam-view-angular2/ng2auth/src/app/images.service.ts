import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Image } from './image';

@Injectable()
export class ImagesService {
  // Define the routes we are going to interact with
 // private urlImagesPagedFiles = 'http://localhost:3333/images_base64_date_paged_files';
  
  private baseUrl = 'http://hjbello.hopto.org:3333';
  private urlImagesPagedFiles = this.baseUrl + '/images_base64_date_paged_files';
  private urlLastImagesLimit = this.baseUrl + '/get_list_images';
  private urlLastImagesLimitDate = this.baseUrl + '/images_base64_date'; // limit=:limit/skip=:skip/day=:day/';
  private images: Image[];

  constructor(private http: HttpClient) { }

  // Implement a method to get the private deals
  getImagesDatePaged(day,page) {
    return this.http
      .get(this.urlImagesPagedFiles + "/day=" + day + "/page=" + page, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  getLastImagesLimit(limit) {
    console.log(this.baseUrl);
    return this.http
      .get(this.urlLastImagesLimit + "/" + limit, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  getLastImagesLimitDate(limit,date) {
    return this.http
      .get(this.urlLastImagesLimitDate + "/limit=" + limit + "/skip=0/day=" + date, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
