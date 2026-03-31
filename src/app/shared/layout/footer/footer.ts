import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu/menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  menuItems;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.menuItems;
  }

  phones = ['+7 (495) 915-79-34', '+7 (495) 912-31-70'];
}
