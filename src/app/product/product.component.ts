import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() view: 'grid' | 'list' | 'currCartItem' | 'prevCartItem' = 'grid';
}
