/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
      extend: {
        backgroundImage: {
          'hero1': "url('./public/assets/her1.png')",
          'hero2': "url('https://www.gold.ac.uk/media/images-by-section/homepage-hero/Students-in-the-library.jpg')"
        },
      },
    },
    plugins: [
      require('tailwindcss-debug-screens'),
    ],
  }
  
  