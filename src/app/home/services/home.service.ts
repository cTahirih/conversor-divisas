import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { MoneyExchangeInterface } from '../interfaces/money-exchange.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getRateOfExchange(CODE: string) {
    const URL = `${environment.urlBase.exchangeApi}${environment.endpoints.pen}`;
    return this.http.get(URL).pipe(
      map(
        (response: any): MoneyExchangeInterface => {
          return {
            base: response.base,
            value: response.conversion_rates[CODE]
          };
        }
      )
    );
  }
}
