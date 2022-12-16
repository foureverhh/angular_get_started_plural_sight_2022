import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  imageMargin: number = 2;
  products: any[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
