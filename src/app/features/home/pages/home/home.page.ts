import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BankAccount } from '@features/home/components/bank-card/bank-card.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  frAccount: BankAccount = { title: "compte bancaire français", name: "name", iban: "FR76 XXXX XXXX XXXX XXXX 155" };

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  accountClicked(account: BankAccount) {
    console.log("cardClicked")
    navigator.clipboard.writeText(account.iban).then(() => {
      //this._snackBar.open("IBAN copié dans le presse-papier", "merci", { duration: 10000, horizontalPosition: 'center', verticalPosition: 'top' });
      console.log('Async: Copying to clipboard was successful! of ');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}
