import { HomeComponent } from '../../home/home.component';

export const RUTAS = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/inicio'
  }
];
