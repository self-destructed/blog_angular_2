import { Routes } from '@angular/router'
import { Home } from './pages/home/home'

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home'
  },

  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not found'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found'
  }
]
