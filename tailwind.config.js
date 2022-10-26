/* refer for more details https://tailwindcss.com/docs/configuration */

module.exports = {
  content: ['src/**/*.{html,js, jsx, tsx, ts}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      primary: ['Montserrat'],
      secondary: ['Poppins'],
    },
    borderRadius: {
      none: '0',
      tiny: '5px',
      sm: '8px',
      DEFAULT: '12px',
      md: '14px',
      lg: '24px',
      full: '9999px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    fontSize: {
      tiny: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '35px',
      '2xl': '45px',
      '3xl': '75px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        50: '#e4e5e5',
        100: '#bdbebe',
        200: '#919293',
        300: '#646667',
        400: '#434647',
        500: '#222526',
        600: '#1e2122',
        700: '#191b1c',
        800: '#141617',
        900: '#0c0d0d',
      },
      secondary: {
        50: '#ebf1f1',
        100: '#cedbdc',
        200: '#aec4c5',
        300: '#8dacae',
        400: '#749a9c',
        500: '#5c888b',
        600: '#548083',
        700: '#4a7578',
        800: '#416b6e',
        900: '#30585b',
      },
      grey: {
        500: '#3c3d44',
      },
      yellow: {
        500: '#f2b619',
      },
      white: {
        50: '#fff',
      },
      success: {
        500: '#277d26',
      },
      danger: {
        500: '#bb0d17',
      },
    },
    extend: {
      width: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      height: {
        '1/10': '10%',
        '1.5/10': '15%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4.5/10': '45%',
        '5.5/10': '55%',
        '6.5/10': '65%',
        '7/10': '70%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      boxShadow: {
        'big': '0 5px 30px -24px rgba(0, 0, 0, 0.3)',
        'small': '0 2px 10px -7px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    outline: false,
  },
};
