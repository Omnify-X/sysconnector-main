import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Driven by CSS variables in globals.css. Light/dark values swap
        // automatically when .dark is applied to <html>.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-elevated': 'rgb(var(--bg-elevated) / <alpha-value>)',
        'bg-sunken': 'rgb(var(--bg-sunken) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        'fg-muted': 'rgb(var(--fg-muted) / <alpha-value>)',
        'fg-subtle': 'rgb(var(--fg-subtle) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        'border-strong': 'rgb(var(--border-strong) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
          fg: 'rgb(var(--accent-fg) / <alpha-value>)',
          subtle: 'rgb(var(--accent-subtle) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        h1: ['clamp(2.5rem, 4vw + 1rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        h2: ['clamp(1.875rem, 2.5vw + 0.5rem, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '680px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
