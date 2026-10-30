import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      animation: { marquee: 'marquee 30s linear infinite' },
      keyframes: { marquee: { '0%': { transform:'translateX(0)' }, '100%': { transform:'translateX(-50%)' } } }
    }
  },
  plugins: []
} satisfies Config;
