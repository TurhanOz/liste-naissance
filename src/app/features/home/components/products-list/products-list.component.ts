import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products:Product[] = [
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"},
    {image:"/assets/poussette.jpeg", name:"poussette ultra chère!"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
