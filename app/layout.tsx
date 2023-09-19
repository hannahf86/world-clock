import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// GLOBAL COMPONENTS



// FONTS
const inter = Inter({ subsets: ['latin'] })



// METADATA
export const metadata: Metadata = {
  title: 'World Clock by Hannah Feehan',
  description: 'World Clock app based on API data',
}


// STYLES



// APP
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
