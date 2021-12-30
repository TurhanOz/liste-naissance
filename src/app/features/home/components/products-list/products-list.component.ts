import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products:Product[] = [
    {image:"/assets/poussette.jpeg", name:"poussette"},
    {image:"/assets/porte-bebe.jpeg", name:"porte-bébé"},
    {image:"/assets/sac-a-langer.jpeg", name:"sac à langer"},
    {image:"/assets/lit-de-voyage.jpeg", name:"lit de voyage"},
    {image:"/assets/siege-auto.jpeg", name:"siège auto"},
    {image:"/assets/tapis-eveil.jpeg", name:"tapis d'éveil"},
    {image:"/assets/lit-barreaux-bebe.jpeg", name:"lit à barreaux"},
    {image:"/assets/gigoteuse.jpeg", name:"gigoteuses"},
    {image:"/assets/table-a-langer.jpeg", name:"table à langer"},
    {image:"/assets/biberons.jpeg", name:"biberons"},
    {image:"/assets/veilleuse.jpeg", name:"veilleuse"},
    {image:"/assets/vetements.jpeg", name:"vêtements..."},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
