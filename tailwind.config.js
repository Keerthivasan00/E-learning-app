/** @type {import('tailwindcss').Config} */

module.exports ={
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: '2rem', // Add padding to the container
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          // You can add custom breakpoints if needed
        },
      },
    },
  },
  plugins: [],
}

