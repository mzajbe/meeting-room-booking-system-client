// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          DEFAULT: "#1E201E",
          foreground: "#FFFFFF",
          
        },
        customAccent1: {
          DEFAULT: "#4F1787",
          foreground: "#FFFFFF",
        },
        customAccent2: {
          DEFAULT: "#84a98c",
          foreground: "#FFFFFF",
        },
      },
      animation: {
        'fade-in-float': 'fadeInFloat 3s ease-out infinite',
      },
      keyframes: {
        fadeInFloat: {
          // '0%': { opacity: '0', transform: 'translateX(100%) translateY(-10px)' },
          '50%': { opacity: '1', transform: 'translateX(0) translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
