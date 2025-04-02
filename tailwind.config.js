/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 怪物猎人主题色
        'mh-dark': '#1a1a1a',      // 深黑底色
        'mh-primary': '#d4af37',   // 金色主色调
        'mh-secondary': '#8b0000', // 暗红色
        'mh-accent': '#3a5f0b',    // 猎人绿
        'mh-text': '#e0e0e0',      // 浅灰文字
        // 稀有度颜色
        'rarity-1': '#a0a0a0',
        'rarity-2': '#00a000',
        'rarity-3': '#4169e1',
        'rarity-4': '#ba55d3',
        'rarity-5': '#ff8c00',
        'rarity-6': '#ff0000'
      },
      fontFamily: {
        'mh-title': ['"Rajdhani"', 'sans-serif'], // 推荐Google Fonts
        'mh-body': ['"Noto Sans SC"', 'sans-serif']
      },
      backgroundImage: {
        'mh-parchment': "url('/src/assets/parchment.jpg')",
        'mh-metal': "url('/src/assets/metal-texture.jpg')"
      },
      boxShadow: {
        'mh-button': '0 4px 0 #8b0000, 0 5px 10px rgba(0, 0, 0, 0.5)',
        'mh-card': '0 0 15px rgba(212, 175, 55, 0.3)'
      },
      animation: {
        'pulse-gold': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};