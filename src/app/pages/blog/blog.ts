import { Component } from '@angular/core';
import { Breadcrumbs } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { PATHS } from '../../core/configs/paths.config';
import { Link } from '../../shared/ui/link/link';

@Component({
  selector: 'app-blog',
  imports: [Breadcrumbs, Link],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  breadcrumbs = [
    {
      name: 'Home',
      href: PATHS.HOME,
    },
    {
      name: 'About us',
      href: PATHS.ABOUT,
    },
  ];
}
