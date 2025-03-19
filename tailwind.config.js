/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Next.js 13+ için src içindeki dosyaları tarar
    "./components/**/*.{js,ts,jsx,tsx}",  // Component klasöründeki dosyaları tarar
    "./app/**/*.{js,ts,jsx,tsx}",  // Next.js'in "app" dizini varsa onu tarar
  ],
  theme: {
    extend: {},  // Burada özel temalar ekleyebilirsin
  },
  plugins: [],  // Ekstra Tailwind eklentileri kullanıyorsan buraya ekle
};
