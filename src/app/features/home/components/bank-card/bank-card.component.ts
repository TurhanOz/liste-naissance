import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {


  @Input() account!:BankAccount;

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard(params:MouseEvent) {
    navigator.clipboard.writeText(this.account.iban).then(function() {
      console.log('Async: Copying to clipboard was successful! of ');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}

export interface BankAccount {
  title: string;
  name: string;
  iban: string;
}