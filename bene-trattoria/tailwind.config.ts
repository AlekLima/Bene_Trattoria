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
        'pizza-green': '#2D4A22',   // Fundo da Navbar
        'pizza-beige': '#F2C17D',   // Fundo da seção de texto
        'pizza-orange': '#C04818',  // Cor dos botões/cards
      },
    },
  },
  plugins: [],
}

export default config;