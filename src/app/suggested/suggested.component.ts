import { Component, Input } from '@angular/core';
import { ICategory } from '../models/models';
@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss'],
})
export class SuggestedComponent {
  @Input() category: ICategory = {
    id: 0,
    category: '',
    subcategory: '',
  };
  @Input() count: number = 3;
}
