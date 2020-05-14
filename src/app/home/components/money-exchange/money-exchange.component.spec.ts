import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MoneyExchangeComponent } from './money-exchange.component';
import { HomeService } from '../../services/home.service';
import { of } from 'rxjs';
import { MoneyExchangeInterface } from '../../interfaces/money-exchange.interface';

describe('MoneyExchangeComponent', () => {
  let component: MoneyExchangeComponent;
  let fixture: ComponentFixture<MoneyExchangeComponent>;
  let homeService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoneyExchangeComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        HomeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([HomeService], serv => {
    homeService = serv;
    fixture = TestBed.createComponent(MoneyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRateOfExchange and return value rate exchange', async(() => {
    const resp: MoneyExchangeInterface = {
      base: 'BASE',
      value: 2
    };

    spyOn(homeService, 'getRateOfExchange').and.returnValue(of(resp));
    component.getRateExchange();

    expect(component.rateExchange).toEqual(resp.value);
  }));

  it('should set value input soles', () => {
    const el = fixture.nativeElement.querySelector('#soles');

    el.value = 2;
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(Number(component.moneyExchange.value.soles)).toBe(2);
  });

  it('should call calculateAmount and set value formcontrol dolar with a number', () => {
    component.rateExchange = 2;
    component.calculateAmount(2);

    expect(component.moneyExchange.controls.dollar.value).toEqual(4);
  });

  it('should set value type string formcontrol soles and this have a error', () => {
    const el = fixture.nativeElement.querySelector('#soles');

    el.value = 'abc';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.formControlSoles.errors).toBeTruthy();
  });
});
