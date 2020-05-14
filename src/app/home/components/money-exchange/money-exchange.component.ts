import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HomeService } from '../../services/home.service';
import { NUMBER } from '../../../core/config/regex.const';
import { MoneyExchangeInterface } from '../../interfaces/money-exchange.interface';

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
      soles: [null, [Validators.pattern(NUMBER)]],
      dollar: [{value: null, disabled: true}]
    });

    this.getRateExchange();
    this.formControlSolesOnChanges();
  }

  calculateAmount(value) {
    const amount = Number(value) * this.rateExchange;

    const valueDollar = Math.round(amount * 100) / 100;

    this.moneyExchange.controls.dollar.setValue(valueDollar);
  }

  getRateExchange() {
    this.homeService.getRateOfExchange('USD').subscribe(
      (response: MoneyExchangeInterface) => {
        this.rateExchange = response.value;
      }
    );
  }

  formControlSolesOnChanges() {
    this.moneyExchange.controls.soles.valueChanges.subscribe((value) => {

      if (this.formControlSoles.errors) {
        this.formControlSoles.setErrors({
          error: true
        });
        return;
      }

      this.calculateAmount(value);
    });
  }

  get formControlSoles() {
    return this.moneyExchange.controls.soles as FormControl;
  }
}
