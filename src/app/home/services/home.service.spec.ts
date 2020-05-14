import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HomeService } from './home.service';
import { environment } from '../../../environments/environment';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('HomeService', () => {
  let service: HomeService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(HomeService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable and set the CODE using http get response', () => {
    const dataFromServer: any = {
      base: 'PEN',
      conversion_rates: {
        USD: 0.2911
      }
    };
    const userObservable: Observable<any> = of(dataFromServer);
    httpClientMock.get.and.returnValue(userObservable);

    const CODE = 'USD';
    service.getRateOfExchange(CODE)
      .subscribe(response => {

        expect(httpClientMock.get)
          .toHaveBeenCalledWith(`${environment.urlBase.exchangeApi}${environment.endpoints.pen}`);

        expect(response).toEqual({
          base: 'PEN',
          value: 0.2911
        });
      });
  });
});
