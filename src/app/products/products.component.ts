import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() view: 'grid' | 'list' = 'grid';

  @Input() sort: 'default' | 'asc' | 'desc' = 'default';
}
