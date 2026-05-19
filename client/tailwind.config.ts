import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, .10)',
        glow: '0 28px 90px rgba(37, 99, 235, .25)'
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 7s ease-in-out infinite',
        softPulse: 'softPulse 5s ease-in-out infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        softPulse: { '0%,100%': { opacity: '.55', transform: 'scale(1)' }, '50%': { opacity: '.9', transform: 'scale(1.08)' } }
      }
    }
  },
  plugins: []
} satisfies Config;
