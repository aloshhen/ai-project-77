export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#10B981',
        accent: '#3B82F6',
        surface: '#1A1F2E',
        border: '#2D3748'
      }
    }
  },
  plugins: []
}