import { Component, OnInit } from '@angular/core';
import { BankAccount } from '@features/home/components/bank-card/bank-card.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  frAccount: BankAccount = { title: "compte bancaire français", name: "name", iban: "FR76 XXXX XXXX XXXX XXXX 155" };

  constructor() { }

  ngOnInit(): void {
  }

}
