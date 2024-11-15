/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      display: ['Teko', 'ui-monospace', 'sans-serif'],
      body: ['Ubuntu Sans Mono', 'monospace'],
      'ubuntu-sans': ['Ubuntu', 'sans-serif'],
      teko: ['Teko', 'sans-serif'],
      'ubuntu-sans-mono': ['Ubuntu Mono', 'monospace'],
      'ubuntu-condensed': ['Ubuntu Condensed', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      'ubuntu-sans-0': '400',
      'teko-1': '700',
      'ubuntu-sans-mono-2': '600',
      'ubuntu-sans-mono-4': '400',
      'ubuntu-condensed-3': '300',
    },
    colors: {
      transparent: 'transparent',
      black: {
        1: 'hsl(0, 0%, 5%)',
        2: 'hsl(0, 0%, 12%)',
      },
      white: {
        1: 'hsl(0, 0%, 96%)',
        2: 'hsl(0, 0%, 90%)',
      },
      neutral: {
        1: 'hsl(245, 30%, 92%)',
        2: 'hsl(245, 25%, 86%)',
        3: 'hsl(245, 21%, 74%)',
        4: 'hsl(245, 17%, 61%)',
        5: 'hsl(245, 15%, 49%)',
        6: 'hsl(245, 17%, 37%)',
        7: 'hsl(245, 21%, 25%)',
        8: 'hsl(245, 25%, 15%)',
        9: 'hsl(245, 30%, 10%)',
      },
      primary: {
        1: 'hsl(288, 100%, 16%)',
        2: 'hsl(296, 95%, 21%)',
        3: 'hsl(305, 90%, 26%)',
        4: 'hsl(313, 90%, 31%)',
        5: 'hsl(321, 95%, 36%)',
        6: 'hsl(330, 100%, 41%)',
        7: 'hsl(338, 100%, 46%)',
      },
      secondary: {
        1: 'hsl(17, 100%, 36%)',
        2: 'hsl(22, 100%, 41%)',
        3: 'hsl(27, 100%, 46%)',
        4: 'hsl(32, 100%, 50%)',
        5: 'hsl(37, 100%, 55%)',
        6: 'hsl(42, 100%, 60%)',
        7: 'hsl(47, 100%, 66%)',
      },
    },
    backgroundImage: {
      'border-gradient': 'linear-gradient(90deg, #eb0056 0%, #eb6a00 100%)',
      'border-gradient-reverse':
        'linear-gradient(90deg, #eb6a00 0%, #eb0056 100%)',
      'fade-down':
        'linear-gradient(180deg, rgb(19, 18, 33) 0%, transparent 100%)',
      'fade-up': 'linear-gradient(0deg, rgb(19, 18, 33) 0%, transparent 100%)',
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
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.75s ease-out',
        slide: 'slide 60s linear infinite',
        slideFromLeft1: 'slideFromLeft 0.4s ease-in forwards 1 0s',
        slideFromLeft2: 'slideFromLeft 0.4s ease-in forwards 1 0.1s',
        slideFromLeft3: 'slideFromLeft 0.4s ease-in forwards 1 0.2s',
        slideFromLeft4: 'slideFromLeft 0.4s ease-in forwards 1 0.3s',
      },
    },
  },
  safelist: [
    'animate-slideFromLeft1',
    'animate-slideFromLeft2',
    'animate-slideFromLeft3',
    'animate-slideFromLeft4',
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.scroller': {
            scrollbarColor: 'hsl(313, 90%, 31%) hsl(240, 5%, 8%)',
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
        },
        ['responsive', 'hover']
      );
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
