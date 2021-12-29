import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {


  @Input() account!: BankAccount;
  @Output() cardClicked = new EventEmitter<BankAccount>();

  constructor() { }

  ngOnInit(): void {
  }

  emitAccountToParent(params: MouseEvent) {
    this.cardClicked.emit(this.account);
  }
}

export interface BankAccount {
  title: string;
  name: string;
  iban: string;
}