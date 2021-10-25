// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,svg}', './public/index.html'],
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
    colors: {
      '02_green': '#050604',
      '22_green': '#39412F',
      'pink': '#FF4365',
      '92_green': '#EBEEE7',
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['Lora', 'serif'],
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '2a': '13px',
        '2b': '14px',
        '3': '16px',
        '3a': '18px',
        '3b': '20px',
        '4': '24px',
        '4b': '26px',
        '4c': '28px',
        '5': '32px',
        '5b': '36px',
        '6': '48px',
        '6b':'54px',
      },
      fontSize: {
        'small' : '.625rem',
        'small12' : '.75rem',
        '2.5xl': '1.75rem',
        'f3.25': '3.25rem'
      },
      lineHeight: {
        'smallff': '.625rem',
        'smallf': '.823rem',
        'small144': '.9rem',
        'smallfs': '.96rem',
        'height36': '2.25rem',
        'height67': '4.188rem'
      },
      letterSpacing: {
        'xlwidest': '0.285em',
        'sp20': '1.25rem'
      },
      
    }
  },
  variants: {
    extend: {
      textDecoration: ['active'],
      textColor: ['hover'],
    },
      
  },
}


