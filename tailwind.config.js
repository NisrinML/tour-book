/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'drop-shadow-md':{
        filter : 'drop-shadow(0 4px 3px rgb(125,143,154/ 0.07)) drop-shadow(0 2px 2px rgb(125,143,154 / 0.06))'
      },
      fontFamily: {
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]}
    },
    darkMode: 'selector',
    colors: {
      'text':{
        light:'#024932',
      },
      'orgnizerbg':{
        light:'#ECF3FA'
      },
      'offerbg':{
        light:'#E0E8E5'
      },
      'input-text':{
      light:'#000000'
      },
    'add-button':{
      light:'#359C88'
    },
    'change-button':{
      light:'#EE9C3D'
    },
    'back-button':{
      light:'#6E8085'
    },
    'button-text':{
      light:'#ffffff'
    },
    'error':{
      light:'#F81010'
    },
    'loginButtonText':{
      light:'#503900'
    },
    'loginBackgroundFrameTo':{
      light:'#FCFEFE'
    },
    'loginBackgroundFrameFrom':{
    light:'#CFF2EB'
  },
  'clientBackgroundTo':{
    light:'#FFDB80'
  },
  'clientBackgroundVia':{
    light:'#83FFE9'
  }, 
  'clientBackgroundFrom':{
    light:'#2AD6B4'
  }, 
  'loginButtonFrom':{
    light:'#D3A84C'
  },
  'loginButtonVia':{
    light:'#FFDD8E'
  },
  'loginButtonTo':{
    light:'#E1B453'
  },
  'inputLabel':{
    light:'#ECFCFB'
  },
  'inputLabelShadow':{
    light:'#0A2737'
  },
    },
    fontFamily: {
     // 'footer':['"javanese-Text"'],
  }
  },
  plugins: [],
}

