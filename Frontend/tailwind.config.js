module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom': '29rem', // Adjust the height value as needed
      },
      animation: {
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      backgroundImage: theme => ({
        'custom-image': "url('/banners/banner1.jpg')", // Adjust the path to your image file
        'custom-gradient': 'linear-gradient(to right, #F8F8F8 0%, #FFFFFF 10%, #F8F8F8 40%, #F8F8F8 100%)',
      }),
      boxShadow: {
        'customShadow': 'rgb(28 28 28 / 8%) 0px 2px 8px', // Adjust shadow values as needed
        'filterShadow': 'rgba(54, 54, 54, 0.06) 0px 1px 2px;',
        'sliderArrow': 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
        'sliderItemShadow': 'rgba(0, 0, 0, 0.08) 0px 3px 12px',
      },
      // backgroundColor: {
      //   'drop': 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)'
      // },
      colors: {
        'primaryBg': 'rgb(255, 255, 255)',
        'zomatoGray': '#828282 ',
        'zomatoRed': '#ff7e8b',
        'graySep': 'rgb(207, 207, 207)',
        'inactiveText': '#696969',
        'filterColor' : 'rgb(156, 156, 156)',
        'filterBorder': 'rgb(207, 207, 207)',
        'filterText': '#9c9c9c',
        'headingText': '#1c1c1c',
        'sliderAngle': 'rgb(105, 105, 105)',
        'grayBg': 'rgb(248, 248, 248)',
        'safeColor': 'rgb(130, 130, 130)',
        'desc': 'rgb(54, 54, 54)',
        'drop': 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)',
        'goldColor': 'rgb(255, 211, 133)',
        'bordColor': '#e5e7eb',
        'loginColor': 'rgb(28, 28, 28)',
        'filterRed': 'rgb(239,79,95)',
        'filterHoverRed': 'rgb(220,45,65)',

      }
    },
  },
  variants: {},
  plugins: [],
};
