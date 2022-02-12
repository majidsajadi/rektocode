module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'active-background': 'var(--active-background-color)',
        'highlight-background': 'var(--highlight-background-color)',
        background: 'var(--background-color)',
        border: 'var(--border-color)',
        success: 'var(--success-color)',
        danger: 'var(--danger-color)',
        alert: 'var(--alert-color)',
        info: 'var(--info-color)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
