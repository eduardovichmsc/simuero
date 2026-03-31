import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogItem } from '../../models/blog.model';
import { Link } from '../link/link';
import { PATHS } from '../../../core/configs/paths.config';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink, Link],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  link = PATHS.BLOG;

  @Input({ required: true }) blog!: BlogItem;
  @Input({ required: true }) href!: (string | number)[];
}
