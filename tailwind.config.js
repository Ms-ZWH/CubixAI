/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#55AD73',
          deep: '#2E8B57',
          soft: '#E8F5EE',
          ink: '#0F1F17',
        },
        surface: {
          base: '#FAFAF7',
          card: '#FFFFFF',
          muted: '#F3F5F2',
        },
        ink: {
          primary: '#0F1F17',
          secondary: '#5C6B63',
          tertiary: '#8A958F',
        },
        line: '#E5EBE7',
        gold: '#C9A961',
      },
      fontFamily: {
        sans: [
          'Inter',
          '"HarmonyOS Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,31,23,0.04), 0 8px 24px rgba(15,31,23,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #55AD73 0%, #2E8B57 100%)',
      },
    },
  },
  plugins: [],
}
