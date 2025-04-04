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
        'mh-rising-sun': '#e3170a',       // 崛起主题红（如炎火村旗帜）
        'mh-dango': '#f8c3cd',            // 粉白色（兔团子色）
        'mh-wyvern': '#5c7c16',           // 飞龙种绿色
        'mh-arzuros': '#e69a2e',          // 青熊兽橙
        'mh-mizutsune': '#9a86a4',        // 泡狐龙紫
        // 稀有度颜色
        'rarity-1': '#a0a0a0',
        'rarity-2': '#00a000',
        'rarity-3': '#4169e1',
        'rarity-4': '#ba55d3',
        'rarity-5': '#ff8c00',
        'rarity-6': '#ff0000',
        parchment: {
          light: '#F0E6D2', // 浅羊皮纸
          dark: '#D2C08E',  // 深羊皮纸
        }
      },
      fontFamily: {
        'mh-title': ['"Rajdhani"', 'sans-serif'], // 推荐Google Fonts
        'mh-body': ['"Noto Sans SC"', 'sans-serif'],
        kai: ['"KaiTi"', '"STKaiti"', '楷体', 'serif'] // 中文楷体
      },
      backgroundImage: {
        'mh-parchment-0': "url('/src/assets/background/parchment-0.webp')",
        'mh-parchment-1': "url('/src/assets/background/parchment-1.webp')",
        'mh-parchment-2': "url('/src/assets/background/parchment-2.webp')",
        'mh-parchment-3': "url('/src/assets/background/parchment-3.webp')",
        'mh-parchment-4': "url('/src/assets/background/parchment-4.webp')",
        'mh-starrysky': "url('/src/assets/background/starrysky.webp')",
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