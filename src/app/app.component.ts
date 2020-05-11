import { Component } from '@angular/core';

import { HomeService } from './home/services/home.service';

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
    this.rateExchange = this.homeService.getRateOfExchange();
  }
}
