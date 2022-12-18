import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { ProductServiceService } from '../../services/product-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  subscription!: Subscription;
  // listFilter: string = 'cart';
  private _listFilter: string = '';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  private _productService: ProductServiceService;

  constructor(productService: ProductServiceService) { 
    this._productService = productService;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listFilter = '';
    this.subscription = this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      }, 
      error: error => this.errorMessage = error
    });
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In setter", value);
    this.filteredProducts = this.performFilter(value);
  }
/*
  products: IProduct[] = [
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
*/
  performFilter(value:string): IProduct[] {
    return this.products.filter(p => p.productName.toLowerCase().includes(value.toLowerCase()));
  }
  
  toggleImage() {
    this.showImage = !this.showImage;
  }

  userRating(message: any) {
    console.log(message);
  }
}
