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
    console.log('selectedPaymentMethod__', this.selectedPaymentMethod);

    this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
      console.log('subscribe: ', res);
      if (res === '0') this.selectedPaymentMethodName = '';
      else this.selectedPaymentMethodName = res.toString();
    });
  }
}
