/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      display: ['Teko', 'ui-monospace', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
      body: ['Ubuntu Sans Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      black: 'hsl(0, 0%, 5%)',
      black2: 'hsl(0, 0%, 12%)',
      white: 'hsl(0, 0%, 96%)',
      white2: 'hsl(0, 0%, 90%)',
      neutral: {
        1: 'hsl(245, 30, 92%)',
        2: 'hsl(245, 25, 86%)',
        3: 'hsl(245, 21, 74%)',
        4: 'hsl(245, 17, 61%)',
        5: 'hsl(245, 15, 49%)',
        6: 'hsl(245, 17, 37%)',
        7: 'hsl(245, 21, 25%)',
        8: 'hsl(245, 25, 15%)',
        9: 'hsl(245, 30, 10%)',
      },
      primary: {
        dk1: 'hsl(288, 100%, 16%)',
        dk2: 'hsl(296, 95%, 21%)',
        md1: 'hsl(305, 90%, 26%)',
        md2: 'hsl(313, 90%, 31%)',
        md3: 'hsl(321, 95%, 36%)',
        lt1: 'hsl(330, 100%, 41%)',
        lt2: 'hsl(338, 100%, 46%)',
      },
      secondary: {
        dk1: 'hsl(17, 100%, 36%)',
        dk2: 'hsl(22, 100%, 41%)',
        md1: 'hsl(27, 100%, 46%)',
        md2: 'hsl(32, 100%, 50%)',
        md3: 'hsl(37, 100%, 55%)',
        lt1: 'hsl(42, 100%, 60%)',
        lt2: 'hsl(47, 100%, 66%)',
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
      addUtilities(
        {
          '.scroller': {
            scrollbarColor:
              'hsl(var(--primary-hue), 100%, 25%) hsl(240, 5%, 8%)',
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
