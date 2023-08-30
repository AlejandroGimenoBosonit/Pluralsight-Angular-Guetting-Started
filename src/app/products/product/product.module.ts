import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConverToSpacesPipe } from 'src/app/shared/pipes/convert-to-spaces.pipe';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe,
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    SharedModule
    /**
     * RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [productDetailGuard], component: ProductDetailComponent },
      ])
     */
  ],
})
export class ProductModule {}
