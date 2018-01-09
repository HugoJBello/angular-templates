import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ImagesService {
  // Define the routes we are going to interact with
  private urlImagesPagedFiles = 'http://localhost:3333/images_base64_date_paged_files';
  //private privateDealsUrl = 'http://localhost:3333/images_base64/limit=3/skip=0'
  constructor(private http: HttpClient) { }

  // Implement a method to get the private deals
  getImagesDatePaged(day,page) {
    console.log("--------" + day + "-------" + page)
    return this.http
      .get(this.urlImagesPagedFiles + "/day=" + day + "/page=" + page, {
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

  purchase(item) {
    alert(`You bought the: ${item.filename}`);
  }
}
