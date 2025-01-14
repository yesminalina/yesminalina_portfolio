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
      blue: '#FAF1E4',
      pink: '#EA8DB2',
      peach: '#FFA3FD',
      mint: '#CEDEBD',
      olive_pale: '#9EB384',
      olive: '#435334',
      slate: colors.slate
    }
  },
  plugins: []
}
