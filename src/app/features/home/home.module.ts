import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    HomePage,
    HeaderComponent,
    FooterComponent,
    CloudsComponent,
    IntroductionComponent,
    BankCardComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
