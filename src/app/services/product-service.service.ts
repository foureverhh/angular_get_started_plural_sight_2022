import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUri = 'assets/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts( ): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUri).pipe(
      tap(data => console.log("all", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if( err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMsg = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong
      errorMsg = `Server returned code ${err.status}, error message is : ${err.message}`
    }
    console.log("error message", errorMsg);
    return throwError(()=>errorMsg);
  }
}
