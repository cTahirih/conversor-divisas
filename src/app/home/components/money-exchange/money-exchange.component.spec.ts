import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyExchangeComponent } from './money-exchange.component';

describe('MoneyExchangeComponent', () => {
  let component: MoneyExchangeComponent;
  let fixture: ComponentFixture<MoneyExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
