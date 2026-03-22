import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then((m) => m.HomePageComponent),
    title: 'Home'
  },
  {
    path: 'home_1',
    redirectTo: ''
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
      import('./pages/not-found-page/not-found-page').then(
        (m) => m.NotFoundPageComponent
      ),
    title: 'Not found'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]
