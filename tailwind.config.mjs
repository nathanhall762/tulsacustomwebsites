/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      black: 'hsl(0, 0%, 5%)',
      black2: 'hsl(0, 0%, 12%)',
      white: 'hsl(0, 0%, 96%)',
      white2: 'hsl(0, 0%, 90%)',
      neutral: {
        1: 'hsl(var(--neutral-hue), var(--neutral-saturation), 92%)',
        2: 'hsl(var(--neutral-hue), var(--neutral-saturation), 88%)',
        3: 'hsl(var(--neutral-hue), var(--neutral-saturation), 78%)',
        4: 'hsl(var(--neutral-hue), var(--neutral-saturation), 67%)',
        5: 'hsl(var(--neutral-hue), var(--neutral-saturation), 46%)',
        6: 'hsl(var(--neutral-hue), var(--neutral-saturation), 31%)',
        7: 'hsl(var(--neutral-hue), var(--neutral-saturation), 20%)',
        8: 'hsl(var(--neutral-hue), var(--neutral-saturation), 12%)',
        9: 'hsl(var(--neutral-hue), var(--neutral-saturation), 8%)',
      },
      primary: {
        dk1: 'hsl(var(--primary-hue), var(--primary-saturation), 25%)',
        dk2: 'hsl(var(--primary-hue), var(--primary-saturation), 32%)',
        md1: 'hsl(var(--primary-hue), var(--primary-saturation), 40%)',
        md2: 'hsl(var(--primary-hue), var(--primary-saturation), 47%)',
        md3: 'hsl(var(--primary-hue), var(--primary-saturation), 57%)',
        lt1: 'hsl(var(--primary-hue), var(--primary-saturation), 62%)',
        lt2: 'hsl(var(--primary-hue), var(--primary-saturation), 68%)',
      },
    },
    textShadow: {
      sm: '1px 1px 2px hsl(0, 0%, 5%)',
      DEFAULT: '2px 2px 4px hsl(0, 0%, 5%)',
      lg: '4px 4px 8px hsl(0, 0%, 5%)',
      xl: '4px 4px 16px hsl(0, 0%, 5%)',
    },
    extend: {
      spacing: {
        '7xl': '1152px',
        '6xl': '960px',
        '5xl': '768px',
        '4xl': '640px',
        '3xl': '512px',
        '2xl': '384px',
        xl: '256px',
        lg: '192px',
        md: '128px',
        sm: '96px',
        xs: '64px',
        xxs: '48px',
      },
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      transitionDuration: {
        fast: '200ms',
        md: '500ms',
        slow: '2000ms',
      },
      scale: {
        sm: '1.01',
        md: '1.05',
        lg: '1.1',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20vh)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.75s ease-out',
        slide: 'slide 60s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scroller': {
          scrollbarColor: 'hsl(var(--primary-hue), 100%, 25%) hsl(240, 5%, 8%)',
        },
        '.scroller-sm': {
          scrollbarColor: 'hsl(var(--primary-hue), 5%, 46%) hsl(240, 5%, 8%)',
          scrollbarWidth: 'thin',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }, ['responsive', 'hover']);
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
