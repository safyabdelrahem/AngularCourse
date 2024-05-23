
import { Component, OnChanges } from '@angular/core';
import { IProduct } from '../../models/i-product';
import { ICategory } from '../../models/i-category';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HighlighrCardDirective} from '../../directives/highlighr-card.directive';
import{SquarePipe } from '../../pipes/square.pipe'
import { EventEmitter, Input,  Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  standalone:true,
  imports:[FormsModule,CommonModule,HighlighrCardDirective,SquarePipe ],
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnChanges{
  myDate: Date = new Date();
  @Input() selectedCategoryId: number = 0;
  @Input() received: number = 0;
  @Input() productsList: IProduct[] = [];
  @Output() onProductBought: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  filteredProducts: IProduct[] = [];

  constructor() { }

  ngOnChanges() {
    this.filterProducts();
  }

  buy(product: IProduct) {
    if (product.quentity > 0) {
      product.quentity--;
      this.onProductBought.emit(product);
    }
  }

  filterProducts() {
    if (this.selectedCategoryId === 0) {
      this.filteredProducts = this.productsList;
    } else {
      this.filteredProducts = this.productsList.filter(product =>
        product.catId === this.selectedCategoryId
      );
    }
  }
}






  // buy(product: IProduct) {
  //   if (product.quentity > 0) {
  //     product.quentity--;
  //   }
  // }

  

  // filterProducts() {
  //   if (this.selectedCategoryId !== null) {
  //     this.filteredProducts = this.products.filter(product =>
  //       product.catId == this.selectedCategoryId 
  //     );
  //   } else {
  //     this.filteredProducts = [];
  //   }
  // }
  // filterProducts(){
  //   if(this.selectedCategoryId==0){
  //     this.filteredProducts=this.products
  //   }else{
  //     this.filteredProducts = this.products.filter(product =>
  //             product.catId == this.selectedCategoryId );
  //   }
  // }




    // buy(count:string,price:number){
  //   //  this.totalOrderPrice=parseInt(count) *price
  //   // this.totalOrderPrice=Number(count) *price
  //   this.totalOrderPrice+= +count *price
  //    // 2-fire event
  //    this.onTotalPriceChanged.emit(this.totalOrderPrice)

  // }
  // // change(){
    
  // // }



