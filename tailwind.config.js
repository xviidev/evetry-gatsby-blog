module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '85perc': '85%',
      },
      height: {
        heroImage: '61.8vh',
      },
      maxHeight: {
        '560px' : '560px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
