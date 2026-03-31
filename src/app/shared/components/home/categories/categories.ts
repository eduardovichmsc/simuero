import { Component } from '@angular/core';
import { Carousel } from '../../../ui/carousel/carousel';
import { Link } from '../../../ui/link/link';

@Component({
  selector: 'app-categories',
  imports: [Carousel, Link],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  items = [
    {
      id: 0,
      image: 'blueprint/ALBA-GD_Simuero-1.webp',
      name: 'M',
    },
    {
      id: 1,
      image: 'blueprint/ALBA-GD_Simuero-2.webp',
      name: 'D',
    },
    {
      id: 2,
      image: 'blueprint/SOYE-GD_Simuero-1.webp',
      name: 'M',
    },
    {
      id: 3,
      image: 'blueprint/simuero-26-delfina-los-delfines-necklace-01.webp',
      name: 'A',
    },
  ];
}
