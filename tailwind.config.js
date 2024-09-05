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
        'slide-in-left': 'slideInLeft 1s ease-in-out',
        'slide-in-right': 'slideInRight 1s ease-in-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 2s linear infinite',
        'scale-in': 'scaleIn 0.5s ease-in-out',
        'scale-out': 'scaleOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeInFloat: {
          '0%': { opacity: '0', transform: 'translateX(100%) translateY(-10px)' },
          '50%': { opacity: '1', transform: 'translateX(0) translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
      },
    },
  },
  plugins: [],
};