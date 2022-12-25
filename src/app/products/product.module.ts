import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../pipes/convert-to-space.pipe';
import { StarComponent } from '../shared/star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path:'', component: ProductListComponent },
      { 
        path:'product/:id', 
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent
      }
    ])
  ]
})
export class ProductModule { }
