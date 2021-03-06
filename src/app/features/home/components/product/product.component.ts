import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Product {
  image:string;
  name:string;
}
