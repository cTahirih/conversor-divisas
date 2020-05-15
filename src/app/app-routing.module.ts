import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RUTAS } from './core/config/rutas.const';

const routes: Routes = RUTAS;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
