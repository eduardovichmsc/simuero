import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Component, signal } from '@angular/core';
import { ScrollService } from './shared/services/scroll';
import { Footer } from './shared/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
  constructor(private scrollService: ScrollService) {}
}
