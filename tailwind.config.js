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
      },
      boxShadow: {
        "3xl": "0 4px 16px rgba(0,0,0,.7), 0 0 0 4px #000",
      },
    },
  },
  plugins: [],
};
