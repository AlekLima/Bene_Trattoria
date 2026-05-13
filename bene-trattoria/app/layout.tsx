import './globals.css'
import { Kaushan_Script } from 'next/font/google'

const kaushanScript = Kaushan_Script({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-kaushan'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kaushanScript.className}>
      <body>
        {children}
      </body>
    </html>
  )
}