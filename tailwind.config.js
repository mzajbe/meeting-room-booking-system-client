module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          DEFAULT: "#1E201E",
          foreground: "#FFFFFF",
        },
        customAccent1: {
          DEFAULT: "#16423C",
          foreground: "#FFFFFF",
        },
        customAccent2: {
          DEFAULT: "#6A9C89",
          foreground: "#FFFFFF",
        },
        customAccent3: {
          DEFAULT: "#84a98c",
          foreground: "#FFFFFF",
        },
        neon: "#190681",
        neonPink: "#ff0080",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "login-bg": "url('/src/assets/images/login-bg (2).jpg')",
      },
      animation: {
        "fade-in-float": "fadeInFloat 3s ease-out infinite",
        "slide-in-left": "slideInLeft 1s ease-in-out",
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scale-bounce": "scaleBounce 0.8s ease-in-out infinite",
        "blur-in": "blurIn 0.7s ease-in-out forwards",
        "neon-blink": "neon-blink 1.5s infinite ease-in-out",
      },
      // keyframes: {
      //   fadeInFloat: {
      //     "0%": { opacity: "0", transform: "translateY(-20px)" },
      //     "100%": { opacity: "1", transform: "translateY(0)" },
      //   },
      //   scaleBounce: {
      //     "0%, 100%": { transform: "scale(1)" },
      //     "50%": { transform: "scale(1.05)" },
      //   },
      //   blurIn: {
      //     "0%": { opacity: "0", filter: "blur(10px)" },
      //     "100%": { opacity: "1", filter: "blur(0)" },
      //   },
      //   neonColor: {
      //     "neon-blink": {
      //       "neon-blink": {
      //         "0%, 100%": {
      //           textShadow:
      //             "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14, 0 0 40px #39FF14",
      //         },
      //         "50%": {
      //           textShadow:
      //             "0 0 2px #39FF14, 0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14",
      //         },
      //       },
      //     },
      //   },
      // },
      keyframes: {
        'neon-blink': {
          '0%, 100%': { 
            textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14, 0 0 20px #39FF14' 
          },
          '50%': { 
            textShadow: '0 0 2px #39FF14, 0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14' 
          },
        },
      },
    },
  },
  plugins: [],
};
