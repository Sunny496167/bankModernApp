/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blue: {
          light: '#5CE1E6',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-25deg, #1C806A 0%, #B1FFEE 100%)', // Custom gradient
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(15deg, theme(colors.blue.light) 0%, theme(colors.white) 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        },
      })
    }
  ],
};
