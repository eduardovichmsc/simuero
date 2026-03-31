import { Component, computed, signal, inject, ChangeDetectorRef } from '@angular/core';
import { PATHS } from '../../core/configs/paths.config';
import { Breadcrumbs } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { productCategories, products } from '../../data/mock';
import { ProductCard } from '../../shared/ui/product-card/product-card';

@Component({
  selector: 'app-shop',
  imports: [Breadcrumbs, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  link = PATHS.SHOP.ROOT;
  private cdr = inject(ChangeDetectorRef);

  breadcrumbs = [
    { name: 'Home', href: PATHS.HOME },
    { name: 'Shop', href: PATHS.SHOP.ROOT },
  ];

  categories = productCategories;

  allProducts = products.map((p) => ({
    id: p.id,
    image: p.image[0],
    name: p.name,
    price: p.price,
    categoryId: p.categoryId,
  }));

  selectedCategoryId = signal<number>(1);

  filteredItems = computed(() => {
    const currentCategoryId = this.selectedCategoryId();
    if (currentCategoryId === 1) return this.allProducts;
    return this.allProducts.filter((item) => item.categoryId === currentCategoryId);
  });

  selectCategory(id: number) {
    if (this.selectedCategoryId() === id) return;

    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        this.selectedCategoryId.set(id);
      });
    } else {
      this.selectedCategoryId.set(id);
    }
  }
}
