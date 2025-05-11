/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-img': "url('/foto-ypm-polera-stark-magik.png')"
      }
    },
    colors: {
      yellow_pale: '#FCF6ED',
      white_warm: '#F8F7F2',
      pink: '#B95879',
      mint: '#CEDEBD',
      olive: '#2A4C4B',
      text_main: '#182B2A',
      slate: colors.slate
    }
  },
  plugins: []
}
