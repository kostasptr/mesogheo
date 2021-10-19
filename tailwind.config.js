// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '2b': '14px',
      '3': '16px',
      '3b': '20px',
      '4': '24px',
      '4b': '26px',
      '4c': '28px',
      '5': '32px',
      '6': '48px',
    },
    colors: {
      '22_green': '#39412F',
      'pink': '#FF4365',
      '92_green': '#EBEEE7',
    },
    fontFamily: {
      'sans': ['Graphik', 'sans-serif'],
      'serif': ['Lora', 'serif'],
    },
    fontSize: {
      'small' : '.625rem',
      'small12' : '.75rem',
    },
    lineHeight: {
      'smallf': '.823rem',
    }
  },
  variants: {
    extend: {
      textDecoration: ['active'],
    }
  },
  plugins: [],
}