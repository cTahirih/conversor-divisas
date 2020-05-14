import { Component } from '@angular/core';

import { HomeService } from './home/services/home.service';
import { MoneyExchangeInterface } from './home/interfaces/money-exchange.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Casa de cambio';
  rateExchange: number;

  constructor(
    private homeService: HomeService
  ) {
    this.homeService.getRateOfExchange('USD').subscribe(
      (response: MoneyExchangeInterface) => {
        this.rateExchange = Math.round(response.value * 100) / 100;
      }
    );
  }
}
