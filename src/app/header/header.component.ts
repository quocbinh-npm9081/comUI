import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models/models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navigationList: NavigationItem[] = [
    { category: 'electronis', subcategories: ['mobiles', 'laptops'] },
    { category: 'furniture', subcategories: ['chairs', 'tables'] },
  ];
  ngOnInit(): void {
    console.log('Component mounted - ngOnInit');
  }
}
