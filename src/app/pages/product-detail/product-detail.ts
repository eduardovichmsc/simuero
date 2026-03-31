import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyProduct, Category, Ring } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { productCategories } from '../../data/mock';
import { CurrencyPipe } from '@angular/common';
import { Breadcrumb, Breadcrumbs } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { PATHS } from '../../core/configs/paths.config';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, Breadcrumbs],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  isProductLoading: boolean = true;
  product = signal<AnyProduct | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  breadcrumbs = computed<Breadcrumb[]>(() => {
    const currentProduct = this.product();

    console.log(currentProduct);

    return [
      {
        name: 'Home',
        href: PATHS.HOME,
      },
      {
        name: 'Shop',
        href: PATHS.SHOP.ROOT,
      },
      {
        name: this.isProductLoading ? 'Loading' : (currentProduct?.name ?? 'Not Found'),
        href: currentProduct ? PATHS.SHOP.ROOT + '/' + currentProduct.id : PATHS.SHOP.ROOT,
      },
    ];
  });

  category = signal<Category | undefined>(undefined);
  selectedImageIndex = signal(0);
  activeTab = signal<number>(0);

  tabs = [
    {
      id: 0,
      name: 'Product Overview',
      content:
        'Our flagship product represents the perfect harmony of innovative engineering and timeless design. Crafted from high-grade materials, it offers unparalleled durability without compromising on aesthetics. Whether you are using it for professional tasks or everyday convenience, its intuitive interface and ergonomic build ensure a seamless experience. Key features include advanced performance metrics, a sleek minimalist profile, and integration capabilities with your existing ecosystem. Experience the next generation of quality where every detail has been meticulously refined for excellence.',
    },
    {
      id: 1,
      name: 'Packaging',
      content:
        'We believe that luxury shouldn’t come at the cost of the planet. Each order is delivered in our signature eco-friendly packaging, made from 100% recycled and biodegradable materials. Our innovative "secure-lock" box design eliminates the need for plastic tapes, while the interior custom-molded pulp ensures your product remains pristine during transit. It is not just a box; it is a premium unboxing experience that reflects our commitment to sustainability and sophisticated craftsmanship.',
    },
    {
      id: 2,
      name: 'Shipping & Returns',
      content:
        'Global logistics handled with care. We offer complimentary standard shipping on all orders exceeding $200, with real-time tracking provided from our warehouse to your doorstep. For those who need it sooner, express shipping options are available at checkout. If you are not completely satisfied with your purchase, our hassle-free return policy allows for returns within 30 days of delivery. We provide pre-paid shipping labels for domestic returns to ensure your experience with us is smooth, transparent, and entirely risk-free.',
    },
  ];

  activeTabContent = computed(() => {
    const currentTab = this.tabs.find((t) => t.id === this.activeTab());
    if (this.activeTab() === 0) {
      return this.product()?.description || 'No description available.';
    }

    return currentTab?.content;
  });

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      if (!isNaN(id)) {
        this.loadProduct(id);
      }
    });
  }

  private loadProduct(id: number) {
    try {
      const foundProduct = this.productService.getProductById(id);
      this.product.set(foundProduct);

      const foundCategory = productCategories.find((id) => this.product()?.categoryId);
      this.category.set(foundCategory);
    } catch (error) {
      console.log(error);
    } finally {
      this.isProductLoading = false;
    }
  }

  readonly sizes = computed(() => {
    const p = this.product();
    if (p && 'sizes' in p) {
      return (p as Ring).sizes;
    }
    return [];
  });

  selectImage(index: number) {
    this.selectedImageIndex.set(index);
  }

  setActiveTab(id: number) {
    this.activeTab.set(id);
  }
}
