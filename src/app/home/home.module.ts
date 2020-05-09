import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MoneyExchangeComponent } from './components/money-exchange/money-exchange.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';



@NgModule({
  declarations: [HomeComponent, MoneyExchangeComponent, MenuListComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
