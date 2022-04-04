module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '968px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
      }
  },
  plugins: [],
}
