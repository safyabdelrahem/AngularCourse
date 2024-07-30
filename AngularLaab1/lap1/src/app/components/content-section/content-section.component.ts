import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  store: Store = new Store('My Store', ['Branch 1', 'Branch 2'], 'logo.jpg');
  ClientName: string = 'Safynaz';
  product: IProduct = {
    ID: 1,
    Name: 'Product 1',
    Quantity: 10,
    Price: 100,
    Img: 'product1.jpg',
    CategoryID: 1
  };
}
