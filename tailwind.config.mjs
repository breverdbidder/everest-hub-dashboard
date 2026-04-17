/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'everest-navy': '#1E3A5F',
        'everest-navy-deep': '#162B47',
        'everest-orange': '#F59E0B',
        'everest-orange-bright': '#FBBF24',
        'everest-bg': '#020617',
        'everest-bg-card': '#0B1220',
        'everest-bg-soft': '#0F172A',
        'everest-bg-hover': '#131E34',
        'everest-border': '#1E293B',
        'everest-text': '#E2E8F0',
        'everest-text-dim': '#94A3B8',
        'everest-text-muted': '#64748B',
        'everest-green': '#10B981',
        'everest-red': '#EF4444',
        'everest-amber': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'everest-radial': 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(30,58,95,.25), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(245,158,11,.06), transparent 60%), #020617',
      },
    },
  },
  plugins: [],
};
