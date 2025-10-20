import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  currentImage: string = '';
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {
    const allProducts = this.productService.getProducts();
    this.product = allProducts.find(p => p.id === id) || null;

    if (this.product) {
      this.currentImage = this.product.image1;
      // Get 3 random related products
      this.relatedProducts = allProducts
        .filter(p => p.id !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    } else {
      this.router.navigate(['/']);
    }
  }

  setCurrentImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
