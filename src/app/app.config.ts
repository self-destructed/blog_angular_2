import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core'
import { provideRouter } from '@angular/router'
import { providePrimeNG } from 'primeng/config'
import { routes } from './app.routes'
import { MyAuraPreset } from './theme/my-aura-preset'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyAuraPreset,
        options: {
          darkModeSelector: false
        }
      }
    })
  ]
}
