import { Component } from '@angular/core';
import { ISuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  suggestedProducts: ISuggestedProduct[] = [
    {
      bannerImage: 'Banner/Banner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      bannerImage: 'Banner/Banner_Laptop.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },
    {
      bannerImage: 'Banner/Banner_Chair.png',
      category: {
        id: 0,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },
  ];
}
