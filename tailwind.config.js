import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff", // Tło jasne
          foreground: "#000000", // Tekst ciemny
          primary: "#006fee", // Niebieski
          secondary: "#7828c8", // Fioletowy
          focus: "#006FEE", // Niebieski dla fokusa
          content1: "#ffffff", // Białe tło treści
          content2: "#f4f4f5", // Jasne tło treści
          content3: "#e4e4e7", // Jasnoszare tło treści
          content4: "#d4d4d8", // Neutralne szaro
          success: "#17c964", // Zielony sukces
          warning: "#f5a524", // Pomarańczowy warning
          danger: "#f31260", // Czerwony dla błędów
          overlay: "#000000", // Ciemne overlay
        },
        dark: {
          background: "#000000", // Tło ciemne
          foreground: "#ffffff", // Jasny tekst
          primary: "#006fee", // Niebieski
          secondary: "#7828c8", // Fioletowy
          focus: "#006FEE", // Niebieski dla fokusa
          content1: "#18181b", // Ciemne tło treści
          content2: "#ffffff", // Białe tło treści w ciemnym trybie
          content3: "#3f3f46", // Ciemnoszare tło
          content4: "#52525b", // Szare tło dla treści
          content5: "#6b6b6b", // Szare tło dla treści
          success: "#17c964", // Zielony sukces
          warning: "#f5a524", // Pomarańczowy warning
          danger: "#f31260", // Czerwony dla błędów
          overlay: "#ffffff", // Białe overlay
        },
      },
    },
  },
  darkMode: "class", // Tryb ciemny przez klasę
  plugins: [heroui()],
};

export default config;
