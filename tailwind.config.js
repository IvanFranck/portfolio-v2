/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          foreground: 'var(--background-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        'stroke-primary': {
          DEFAULT: 'var(--stroke-primary)',
          foreground: 'var(--stroke-foreground)',
        },
      },
      fontFamily: {
        'cursive': ['La Belle Aurore', 'cursive'],
      }
    },
  },
  plugins: [],
}

