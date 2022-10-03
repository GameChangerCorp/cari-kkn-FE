module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"  
  ],
  theme: {
    extend: {},
    colors:{
      mainColor : '#0E6EFF',
      w : '#cce0ff',
      grayColor : '#DADADA',
      white: '#fffff',
      reject : '#A10101',
      approve : '#34A101',
      progress: '#34A101'

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}