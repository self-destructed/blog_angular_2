import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const persianGreen = {
  50: '#e6fffa',
  100: '#bffaf0',
  200: '#8ff2e3',
  300: '#5be8d4',
  400: '#2cdcc2',
  500: '#00a693', // persian-green
  600: '#008b7a',
  700: '#007062',
  800: '#00584c',
  900: '#004238',
  950: '#002a24'
}

export const MyAuraPreset = definePreset(Aura, {
  semantic: {
    primary: persianGreen,
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },

        surface: {
          0: '#ffffff',
          50: 'var(--color-black-squeeze)',
          100: 'var(--color-aqua-squeeze)',
          900: 'var(--color-shark)'
        }
      },
      // TODO choose correct dark theme colors
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        }
      }
    }
  }
})
