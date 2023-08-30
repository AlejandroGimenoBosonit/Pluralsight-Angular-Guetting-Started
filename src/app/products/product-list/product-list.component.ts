import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  /**
   * * To use a service that is not provided in root
   * providers: [ProductService]
   */
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // service injection
  constructor(private ps: ProductService) {}

  /**
   * * Getter & Setter
   */
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    // when initialized (OnInit) we need to call a method to apply this filter
    this.filteredProducts = this.performFilter(value);
  }

  pageTtitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  sub!: Subscription;

  ngOnInit(): void {
    // Using setter to initialize a private variable
    this.listFilter = '';
    // Assign value to a variable by a service injection
    this.sub = this.ps.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  // unsubscribe of the observable fro mthe service that provides our data
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // methods
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // filtered products method
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTtitle = 'Product List: ' + message;
  }
}
