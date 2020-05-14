import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/*components*/
import { MoneyExchangeComponent } from './components/money-exchange/money-exchange.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

@NgModule({
  declarations: [
    MoneyExchangeComponent,
    MenuListComponent
  ],
  exports: [
    MoneyExchangeComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
