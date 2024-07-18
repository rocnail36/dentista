import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      lato: ["var(--font-lato)"],
      anton:["var(--font-anton)"]
     },
     backgroundImage:{
       'hero-desktop' : "linear-gradient(180deg, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.5) 100%), url('/hero.webp')",
       'image-section': "url('/image-section.webp')"
     }
    },
  },
  plugins: [],
};
export default config;
