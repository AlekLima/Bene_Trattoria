import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-green': '#2D4A22',
        'pizza-beige': '#F5D8B4',
        'pizza-red': '#B5361E',
        'pizza-red-dark': '#872817',
        'pizza-brown': '#4D2F16',
        'pizza-brown-dark': '#2F1B0F',
      },
    },
  },
  plugins: [],
}

export default config;
