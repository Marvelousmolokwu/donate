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
      skeletonColor:"rgba(49,49,49,0.1)",
      green: "#3cb043"
    },
  extend: {
    backgroundImage:{
      profile:"url('https://res.cloudinary.com/ddgyd8szc/image/upload/v1693992668/user_kqx5w2.png')"
    },
  keyframes:{
  modalactive:{
  '0%':{
        transform:' translateY(-100%)',
        opacity:'0'
  },
  '100%':{
        transform:' translateY(0%)',
        opacity:'1'
  }
    },modalinactive:{
      '0%':{
            transform:' translateY(0%)',
            opacity:'1'
      },
      '100%':{
            transform:' translateY(-100%)',
            opacity:'0'
      }
        }
   },
   
    },
  },
  plugins: [],
}

