/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink':'#FF426F',
        'ablack':'#100F0F',
        'twhite':' #F4F4F4',
        'orange':'#FF5300',
        'grey':' #565656',
     },
      fontFamily :{
        'gilroy': ['Gilroy', 'sans-serif']
      },
      backgroundImage: {
        'balloonMob': "url('@assets/balloonMob.png')",
        'thanos': "url('@assets/thano.png')",
        'land': "url('@assets/testimo.png')",
        'vector2': "url('@assets/vector2.png')",
        'indusLander': "url('@assets/hero.png')",
        'manart': "url('@assets/manArt.png')",
        'cardbg': "url('@assets/cardbg.jpg')",
        'vector': "url('@assets/backgroundVector.png')",
        'moon': "url('@assets/brandImage.png')",
        'landerImg': "url('@assets/landerImage1.png')",
        'balloon': "url('@assets/balloon.png')",
        'footerImg': "url('@assets/footer.png')",
        'abouts': "url('@assets/abouts.png')",
        'earth':"url('@assets/earth.png')",
        'hands':"url('@assets/hands.png')",
      }
    },
  },
  plugins: [],
}
