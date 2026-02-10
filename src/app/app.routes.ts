import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((m) => m.Home),
    title: 'Home'
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq-page/faq-page').then((m) => m.FaqPageComponent),
    title: 'FAQ'
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found-[age/not-found-page').then((m) => m.NotFound),
    title: 'Not found'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]
