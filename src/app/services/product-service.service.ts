import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUri = 'api/products/products.json';
  
  constructor(private http: HttpClient) { }

  getProducts( ): IProduct[] {
    return [
      {
  "productId": 2,
  "productName": "Garden Cart",
  "productCode": "GDN-0023",
  "releaseDate": "March 18, 2021",
  "description": "description 1",
  "price": 32.99,
  "starRating": 4.2,
  "imageUrl": "assets/images/iphone.png"
},
{
  "productId": 5,
  "productName": "Hammer",
  "productCode": "TBX-0048",
  "releaseDate": "May 21, 2021",
  "description": "description 2",
  "price": 8.9,
  "starRating": 4.8,
  "imageUrl": "assets/images/samsung.png"
}
    ];
  }
}
