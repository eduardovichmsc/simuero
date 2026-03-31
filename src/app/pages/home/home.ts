import { Component } from '@angular/core';
import { Hero } from '../../shared/ui/hero/hero';
import { Bestsellers } from '../../shared/components/home/bestsellers/bestsellers';
import { Campaign } from '../../shared/components/home/campaign/campaign';
import { Process } from '../../shared/components/home/process/process';
import { Categories } from '../../shared/components/home/categories/categories';
import { Social } from '../../shared/components/social/social';

@Component({
  selector: 'app-home',
  imports: [Hero, Bestsellers, Campaign, Process, Categories, Social],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
