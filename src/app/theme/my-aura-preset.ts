import { definePreset, palette } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const MyAuraPreset = definePreset(Aura, {
  semantic: {
    primary: palette('#00aaa1'),
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
