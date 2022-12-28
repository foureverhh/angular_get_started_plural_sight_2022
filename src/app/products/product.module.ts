import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../pipes/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    // StarComponent get from SharedModule
  ],
  imports: [
    // CommonModule, get from SharedModule
    // FormsModule,  get from SharedModule
    RouterModule.forChild([
      { path:'', component: ProductListComponent },
      { 
        path:'product/:id', 
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
