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
      backgroundImage: theme => ({
        'custom-image': "url('/banners/banner1.jpg')", // Adjust the path to your image file
      }),
      boxShadow: {
        'customShadow': 'rgb(28 28 28 / 8%) 0px 2px 8px', // Adjust shadow values as needed

      },
      colors: {
        'primaryBg': 'rgb(255, 255, 255)',
        'zomatoGray': '#828282 ',
        'zomatoRed': '#ff7e8b',
        'graySep': 'rgb(207, 207, 207)',
        'inactiveText': '#696969',
       

      }
    },
  },
  variants: {},
  plugins: [],
};
