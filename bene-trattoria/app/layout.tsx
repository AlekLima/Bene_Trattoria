import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={cormorant.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
