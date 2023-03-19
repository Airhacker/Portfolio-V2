/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#F5F5F5",
        primaryText: "#111111",
        secondaryText: "#999999",
        reactBg: "#00D8FE",
        tailwindBg: "#19B6BD",
        cssBg: "#0F246E",
        firebaseBg: "#FFCA28",
        githubBg: "#937bfe",
      },
      boxShadow: {
        "3xl": "0 4px 16px rgba(0,0,0,.7), 0 0 0 4px #000",
      },
    },
  },
  plugins: [],
};
