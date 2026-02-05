import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Home'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
    title: 'FAQ'
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not found'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]
