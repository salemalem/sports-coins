import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'glitch-1': 'glitch-1 750ms infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 750ms infinite linear alternate-reverse',
        'border-glitch': 'border-glitch 2s infinite linear',
        'text-glitch': 'text-glitch 2s infinite linear',
      },
      keyframes: {
        'glitch-1': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'glitch-2': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'border-glitch': {
          '0%': { borderColor: 'rgba(139, 92, 246, 0.5)' },
          '25%': { borderColor: 'rgba(219, 39, 119, 0.5)' },
          '50%': { borderColor: 'rgba(16, 185, 129, 0.5)' },
          '75%': { borderColor: 'rgba(59, 130, 246, 0.5)' },
          '100%': { borderColor: 'rgba(139, 92, 246, 0.5)' },
        },
        'text-glitch': {
          '0%': { textShadow: '2px 0 rgba(139, 92, 246, 0.5), -2px 0 rgba(219, 39, 119, 0.5)' },
          '25%': { textShadow: '-2px 0 rgba(139, 92, 246, 0.5), 2px 0 rgba(219, 39, 119, 0.5)' },
          '50%': { textShadow: '2px 0 rgba(16, 185, 129, 0.5), -2px 0 rgba(59, 130, 246, 0.5)' },
          '75%': { textShadow: '-2px 0 rgba(16, 185, 129, 0.5), 2px 0 rgba(59, 130, 246, 0.5)' },
          '100%': { textShadow: '2px 0 rgba(139, 92, 246, 0.5), -2px 0 rgba(219, 39, 119, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config