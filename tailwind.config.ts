import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow:  '#FFF22E',
        bg:      '#111111',
        surface: '#1C1C1E',
        card:    '#2A2A2C',
        border:  '#3A3A3C',
        teal:    '#00B8B0',
        mint:    '#5ED3A8',
        sky:     '#38BDF8',
        violet:  '#8B7FE8',
        muted:   '#9A9AA0',
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        mono:  ['var(--font-space-mono)', 'monospace'],
        sans:  ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '28px',
      },
    },
  },
  plugins: [],
}

export default config
