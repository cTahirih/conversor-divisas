import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.scss']
})
export class MoneyExchangeComponent implements OnInit {

  moneyExchange: FormGroup;
  rateExchange: number;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.moneyExchange = this.formBuilder.group({
      soles: [null, Validators.required],
      dollar: [null]
    });

    this.calculateAmount();
    this.rateExchange = this.homeService.getRateOfExchange();
  }

  calculateAmount() {
    this.moneyExchange.controls.soles.valueChanges.subscribe((value) => {

      const amount = Number(value) * this.rateExchange;
      this.moneyExchange.controls.dollar.setValue(amount * 3);

    });
  }
}
