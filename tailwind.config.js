/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f2f7ff",100:"#e6efff",200:"#cfe0ff",300:"#a6c7ff",
          400:"#6fa2ff",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",
          800:"#1e40af",900:"#1e3a8a"
        }
      },
      boxShadow: { glow: "0 0 40px rgba(59,130,246,.25)" }
    },
  },
  plugins: [],
}
