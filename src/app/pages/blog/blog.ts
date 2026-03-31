import { Component } from '@angular/core';
import { Breadcrumbs } from '../../shared/ui/breadcrumbs/breadcrumbs';
import { PATHS } from '../../core/configs/paths.config';
import { Link } from '../../shared/ui/link/link';
import { blogs } from '../../data/mock';
import { BlogCard } from '../../shared/ui/blog-card/blog-card';

@Component({
  selector: 'app-blog',
  imports: [Breadcrumbs, Link, BlogCard],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  link = PATHS.BLOG;

  breadcrumbs = [
    {
      name: 'Home',
      href: PATHS.HOME,
    },
    {
      name: 'Blog',
      href: PATHS.BLOG,
    },
  ];
  blogs = blogs;
}
