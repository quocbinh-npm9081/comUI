import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  selectedPaymentMethodName = 'a';
  selectedPaymentMethod = new FormControl('0');
  ngOnInit(): void {
    this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
      if (res === '0') this.selectedPaymentMethodName = '';
      else this.selectedPaymentMethodName = res.toString();
    });
  }
}
