/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ścieżka do Twoich plików źródłowych
  ],
  theme: {
    extend: {
      colors: {
        // Dodaj swoje niestandardowe kolory, np. niebiesko-fioletowy akcent
        blueAccent: "#4f46e5",  // przykład niebieski
        purpleAccent: "#8b5cf6", // przykład fioletowy
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
