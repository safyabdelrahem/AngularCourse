import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentSectionComponent } from '../content-section/content-section.component';
import{IProduct} from '../../models/i-product'
import { ICategory } from '../../models/i-category';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ContentSectionComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCategoryId: number = 0;
  products: IProduct[] = [
    { id: 100, name: "Dell Laptop", price: 50000, quentity: 3, catId: 1, imgUrl: 'https://fakeimg.pl/300/' },
    { id: 200, name: "Hp", price: 50000, quentity: 3, catId: 1, imgUrl: 'https://fakeimg.pl/300/' },
    { id: 300, name: "Oppo", price: 50000, quentity: 3, catId: 2, imgUrl: 'https://fakeimg.pl/300/' },
    { id: 400, name: "samsung", price: 50000, quentity: 3, catId: 2, imgUrl: 'https://fakeimg.pl/300/' }
  ];
  purchasedProducts: IProduct[] = [];
  categories: ICategory[] = [];
  filteredProducts: IProduct[] = [];
 
 
constructor(){
}

ngOnInit() {
  this.categories = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phones' }
  ];
  this.filterProducts(); 
}

filterProducts() {
  if (this.selectedCategoryId === 0) {
    this.filteredProducts = this.products;
  } else {
    this.filteredProducts = this.products.filter(product =>
      product.catId === this.selectedCategoryId
    );
  }
}

onBuyClicked(product: IProduct) {
  this.buy(product);
}

buy(product: IProduct) {
  this.purchasedProducts.push(product);
}

removeProduct(product: IProduct) {
  const index = this.purchasedProducts.indexOf(product);
  if (index !== -1) {
    this.purchasedProducts.splice(index, 1);
  }
}
}




// calcTotalPrice(price:number){
// this.recievedTotalPrice=price
// }



