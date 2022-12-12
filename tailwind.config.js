module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#191624',
      },
      animation: {
        slidedown: 'slidedown 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 1s ease-in-out',
      },
      fontFamily: {
        noto: ['Noto Sans Limbu', 'sans-serif'],
        sans: ['Roboto'],
        caveat: 'Caveat'
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'none' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
}