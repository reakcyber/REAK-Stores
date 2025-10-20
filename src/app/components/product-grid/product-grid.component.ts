import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
// import { ProductService } from '../../services/product.service';
// import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';

  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;
  showQuickView: boolean = false;
  modalCurrentImage: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    if (!this.searchQuery || this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
    }
  }

  openQuickView(product: Product) {
    this.selectedProduct = product;
    this.modalCurrentImage = product.image1 || '';
    this.showQuickView = true;
    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    this.showQuickView = false;
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }
}
