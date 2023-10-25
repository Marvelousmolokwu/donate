/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      poppins:['Poppins', 'sans-serif'],
    },
    colors:{
      textcolor:"#000",
      backgroundcolor:"#fff",
      primary:"#0a2f6c",
      lightBlue:"#5c94ed",
      secondary:"#e0e8eb",
      accent:"#22457f",
      kit:"rgba(225,232,235, 0.2)",
      overlay:"rgba(49,49,49,0.5)",
      green: "#3cb043"
    },
  extend: {
    backgroundImage:{
      profile:"url()"
    },
  keyframes:{
  modal:{
  '0%':{
        transform:' translateY(-100%)',
        opacity:'0'
  },
  '100%':{
        transform:' translateY(0%)',
        opacity:'1'
  }
    }
   }
    },
  },
  plugins: [],
}

