/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001219', // Deep navy blue for headings and important text
        background: '#FFFFFF', // Clean white background
        highlight: '#0A76DB', // Vibrant blue for buttons and highlights
        paragraph: '#656565', // Soft gray for paragraph text
        hoverButton: '#005BB5', // Darker blue for hover effect on buttons
        cardBackground: '#E0E7F2', // Light blue-gray background for cards
      },
      // Adding gradient for card hover effect
      backgroundImage: {
        'card-hover': 'linear-gradient(90deg, #001219, #005BB5)', // Gradient for card hover
      },
    },
  },
  plugins: [],
};
