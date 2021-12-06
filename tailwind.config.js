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

      '2lg': '1152px',
      // => @media (min-width: 1152px) { ... }

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
        '0.5': '4px',
        '0.75': '6px',
        '1': '8px',
        '1.5': '10px',
        '2': '12px',
        '2a': '13px',
        '2b': '14px',
        '3': '16px',
        '3a': '18px',
        '3b': '20px',
        '4': '24px',
        '4a': '25px',
        '4b': '26px',
        '4c': '28px',
        '4d': '30px',
        '4.5': '1.875rem',
        '5': '32px',
        '5aa': '33px',
        '5a': '34px',
        '5a2': '35px',
        '5b': '36px',
        '5b2': '38px',
        '5c': '40px',
        '5d': '41px',
        '5dd': '42px',
        '5e': '46px',
        '6': '48px',
        '6a': '52px',
        '6b':'54px',
        '56': '56px',
        '60': '60px',
        '62': '62px',
        '64':'64px',
        '68':'68px',
        '72':'72px',
        '75': '75px',
        '82': '82px',
        '109':'109px',
        '111':'111px',
        '116':'116px',
        '194': '194px',
        '294': '294px'
      },
      fontSize: {
        'small' : '.625rem',
        'small12' : '.75rem',
        'small22': '1.375rem',
        'f24': '1.5rem',
        'f26': '1.625rem',
        't28': '1.750rem',
        'base2': '2rem',
        'f36': '2.25rem',
        '4.25xl': '2.375rem',
        'f3.25': '3.25rem',
        'f3.625': '3.625rem',
        'f4': '4rem',
        'f5': '5rem'
      },
      lineHeight: {
        'smallff': '.625rem',
        'smallf': '.823rem',
        'small144': '.9rem',
        'smallfs': '.96rem',
        'height28': '1.75rem',
        'height36': '2.25rem',
        'height41': '2.563rem',
        'height44': '2.75rem',
        'height46': '2.875rem',
        'height60': '3.75rem',
        'height66': '4.125rem',
        'height67': '4.188rem',
        'height68': '4.25rem'
      },
      leading: {
        '4.5': '1.125rem'
      },
      letterSpacing: {
        'xlwidest': '0.285em',
        'sp20': '1.25rem',
        'sp24': '1.5rem',
        'sp32': '2rem',
        'sp36': '2.25rem'
      },
      screens:{
        'sm2': '1440px',
        'sm3': '1920px',
      },
      dropShadow: {
        '0.5': '0 1px 1px rgba(0, 0, 0, 0.25)',
      }
      
    }
  },
  variants: {
    extend: {
      textDecoration: ['active'],
      textColor: ['hover'],
    },
      
  },
}


