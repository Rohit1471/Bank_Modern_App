/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      // Default
      white:'#FFF',
      black:'#000',
      // Background Color
      bodyBg:'#1E202B',
      primaryBg:'#2d303d',
      secondaryBg:'#323544',
      // Font color
      primaryColor:'#BFC1C8',
      secondaryColor:'#009AD8',    
    },
    fontSize:{
      h1:[ '90px',{
        fontWeight: '900',
      }],
      h2:['36px',{
        fontWeight: '300',
      }],
      h3:['24px',{
        lineHeight: '1.5',
        fontWeight: '700',
      }],
      h4:['18px',{
        fontWeight: '400',
      }],
      h5:['16px',{
        fontWeight: '300',
      }],
      h6:['11px',{
        fontWeight: '300',
      }],
      bodyFont:['14px',{
        fontWeight: '300',
      }],

    },
    fontFamily:{
      roboto:["Roboto"],
      poppins:["Poppins"],
    },
    screens:{
      'sms':{'max' : '480px'}, // Small Mobile Screen 
      'mms':{'max': '640px'}, // Medium Mobile Screen
      'sts':{'max': '767px'}, // Small Mobile Screen
      'mts':{'max': '991px'}, // Medium Mobile Screen
      'lts':{'max': '1080px'}, // Large Mobile Screen
    },    
    extend: {},
  },
  plugins: [],
}

