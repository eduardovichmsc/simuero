import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { Carousel } from '../../../ui/carousel/carousel';
import { Link } from '../../../ui/link/link';
import { PATHS } from '../../../../core/configs/paths.config';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { products } from '../../../../data/mock';
import { ProductCard } from '../../../ui/product-card/product-card';

register();

@Component({
  selector: 'app-bestsellers',
  imports: [Carousel, Link, CommonModule, RouterLink, ProductCard],
  templateUrl: './bestsellers.html',
  styleUrl: './bestsellers.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Bestsellers {
  link = PATHS.SHOP.ROOT;
  products = products;
}
