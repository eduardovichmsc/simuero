import { Component } from '@angular/core';
import { PATHS } from '../../core/configs/paths.config';
import { Breadcrumbs } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { productCategories } from '../../data/mock';
import { ProductCard } from '../../shared/ui/product-card/product-card';

@Component({
  selector: 'app-shop',
  imports: [Breadcrumbs, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  link = PATHS.SHOP.ROOT;

  breadcrumbs = [
    {
      name: 'Home',
      href: PATHS.HOME,
    },
    {
      name: 'Shop',
      href: PATHS.SHOP.ROOT,
    },
  ];

  categories = productCategories;

  items = [
    {
      id: 0,
      image: 'blueprint/simuero-26-delfina-los-delfines-necklace-01.webp',
      name: 'Bracelett Cherry',
      price: 389,
    },
    {
      id: 1,
      image: 'blueprint/ALBA-GD_Simuero-1.webp',
      name: 'Simuero Ring',
      price: 250,
    },
    {
      id: 2,
      image: 'blueprint/ALBA-GD_Simuero-2.webp',
      name: 'Seashell Necklakes',
      price: 250,
    },
    {
      id: 3,
      image: 'blueprint/SOYE-GD_Simuero-1.webp',
      name: 'Solara Ring',
      price: 389,
    },
  ];
}
